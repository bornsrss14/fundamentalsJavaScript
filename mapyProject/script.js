'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
