
document.getElementById("perfil-le").addEventListener("click", function() {
    window.location.href = "principal.html";
    localStorage.setItem('imagemSelecionada', "./src/assets/le.jpeg");
});

document.getElementById("perfil-ri").addEventListener("click", function() {
    window.location.href = "principal.html";
    localStorage.setItem('imagemSelecionada', "./src/assets/ri.jpeg");
});

document.getElementById("perfil-ch").addEventListener("click", function() {
    window.location.href = "principal.html";
    localStorage.setItem('imagemSelecionada', "./src/assets/ch.jpeg");
});

const perfil = document.getElementById("perfil");
const fechar = document.getElementById("fechar");
const popupGerenciar = document.getElementById("popupGerenciar");

perfil.addEventListener("click", () => {
  popupGerenciar.style.display = "flex";
  document.getElementById("blurAg").style.display = "block";
});

fechar.addEventListener("click", () => {
  popupGerenciar.style.display = "none";
  document.getElementById("blurAg").style.display = "none";
});