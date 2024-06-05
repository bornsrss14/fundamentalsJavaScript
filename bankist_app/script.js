document.addEventListener('DOMContentLoaded', () => {
    const fechaSpan = document.getElementById('current-date');
    const fechaActual = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    fechaSpan.textContent = fechaActual.toLocaleDateString('es-ES', opciones);
});