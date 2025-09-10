
const tempoDeEspera = 2000;

setTimeout(() => {
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = 'perfil.html';
  }, 1000);
}, tempoDeEspera);