
const informações = document.getElementById("informações");
const close = document.getElementById("close");
const popupInfo = document.getElementById("popupInfo");
const blurBg = document.getElementById("blurBg")

informações.addEventListener("click", () => {
  popupInfo.style.display = "flex";
  blurBg.classList.add("ativo");
});

close.addEventListener("click", () => {
  popupInfo.style.display = "none";
   blurBg.style.display = "none";
});

const imagens = document.querySelectorAll('.imagem');
const texto = document.getElementById('textoPopup');
const textoFilme = document.getElementById('textoFilme');
let linkDoVideo = "https://youtube.com/shorts/Sau_-uyQlDQ?si=76QR_J1gaQOXkAa0";

imagens.forEach(img => {
  img.addEventListener('click', () => {
    const novoTexto = img.getAttribute('data-texto'); 
    const novoNome = img.getAttribute ('title');
    texto.textContent = novoTexto;
    textoFilme.textContent = novoNome;
    linkDoVideo = img.getAttribute('data-video');
    console.log("Vídeo selecionado:", linkDoVideo);
  });
});

const botao = document.getElementById('youtube');
botao.addEventListener('click', () => {
  if (linkDoVideo) {
    window.open(linkDoVideo, '_blank');
  } else {
    alert("Perdão, deu errado!");
  }
});

const topo = document.getElementById("topo");
const divImagens = document.querySelector('.Imagens')
const pagina = document.getElementById('página');

imagens.forEach(img => {
  img.addEventListener('click', () => {
    const filhos = topo.children;
    for (let i = 0; i < filhos.length; i++) {
      if (filhos[i].tagName !== 'H1') {
        filhos[i].style.display = 'none';
      }
    }
    divImagens.style.display = 'none';
    pagina.style.backgroundColor = 'rgba(209, 220, 229, 1)'
  });
});

const caminho = localStorage.getItem('imagemSelecionada');
const imagem = document.getElementById('imagemFinal');

  if (caminho) {
    imagem.src = caminho;
  } else {
    imagem.alt = 'Nenhuma imagem selecionada';
  }

  document.getElementById("youtube").addEventListener("click", function () {
  window.location.href = "";
});
