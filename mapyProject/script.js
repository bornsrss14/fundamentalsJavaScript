'use strict';

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const copyright = document.querySelector('.copyright');

const today = new Date();
const optionsDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const formattedDate = today.toLocaleDateString('es-ES', optionsDate);

const hours = today.getHours().toString().padStart(2, '0');
const minutes = today.getMinutes().toString().padStart(2, '0');
const formattedTime = `${hours}:${minutes}`;

copyright.textContent = `${formattedDate}, ultima actualización: ${formattedTime}`;

// Initialize the map and set its view to a chosen geographical point and zoom level
// Set up the map tiles

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //should be in kilometers
    this.duration = duration; //should be in minutes
  }
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Hicking extends Workout {
  type = 'hicking';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevGain) {
    super(coords, distance, duration);
    this.elevGain = elevGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const newHick = new Hicking([18, -96], 5.2, 24, 178);
// const newCycling = new Cycling([18, -96], 27, 95, 523);
// console.log(newHick, newCycling);

/* -------------------------------------------------------------- */
/*--------------- APLICATION ARCHITECTURE ----------------------- */
/* -------------------------------------------------------------- */
class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 16;
  constructor() {
    /* Get user's position */
    this._getPosition();
    /* Get data from local storage */
    this._getLocalStorage();

    /* Attach event handlers */
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your current position');
        }
      );
    }
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);
    const currCoords = [latitude, longitude];
    // console.log(this);
    this.#map = L.map('map').setView(currCoords, this.#mapZoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const funValidateInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();
    //Get data from the form (inputs)
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    /* if activity is Hicking, create a hicke object */
    if (type === 'hicking') {
      const cadence = +inputCadence.value;
      if (
        !funValidateInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Should be a positive number ');
      workout = new Hicking([lat, lng], distance, duration, cadence);
    }
    /* if activity is cycling, then create a cycling object */
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !funValidateInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Should be a positive number');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    /* Add the new object to workout array */
    this.#workouts.push(workout);
    // console.log(workout);
    /* Render the new object in the map as a pin */
    this._renderWorkoutMarker(workout);

    /* Render the workouts in list*/
    this._renderWorkout(workout);

    /* Clear the fields and hide the section in the screen */
    this._hideForm();
    /* Set local storage to all workouts */
    this._saveMarkersToLocalStorage();
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'hicking' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `
          <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'hicking' ? '🥾' : '🚴'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>

        
    `;
    if (workout.type === 'hicking')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>

      <div class="workout__details">
        <span class="workout__icon">👣</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>

      `;

    if (workout.type === 'cycling')
      html += `
    <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevGain}</span>
            <span class="workout__unit">m</span>
          </div>
    `;
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout ');
    // console.log(workoutEl);
    14;
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
  _saveMarkersToLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    // console.log(data);
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
}

const insApp = new App();
