const emojis = [
  "<img alt='emoji1' width='100' height='100' src='./src/img2/1.png'>",
  "<img alt='emoji1' width='100' height='100' src='./src/img2/1.png'>",
  "<img alt='emoji2' width='100' height='100' src='./src/img2/2.png'>",
  "<img alt='emoji2' width='100' height='100' src='./src/img2/2.png'>",
  "<img alt='emoji3' width='100' height='100' src='./src/img2/3.png'>",
  "<img alt='emoji3' width='100' height='100' src='./src/img2/3.png'>",
  "<img alt='emoji4' width='100' height='100' src='./src/img2/4.png'>",
  "<img alt='emoji4' width='100' height='100' src='./src/img2/4.png'>",
  "<img alt='emoji5' width='100' height='100' src='./src/img2/5.png'>",
  "<img alt='emoji5' width='100' height='100' src='./src/img2/5.png'>",
  "<img alt='emoji6' width='100' height='100' src='./src/img2/6.png'>",
  "<img alt='emoji6' width='100' height='100' src='./src/img2/6.png'>",
];

let openCards = [];

// Embaralhar os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Criar os quadrados e adicionar à página
for (let i = 0; i < shuffleEmojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxMatch")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
  playSound("flip");
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  // Verificar se todos os pares foram encontrados
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    Swal.fire({
      title: "Parabéns!",
      text: "Você venceu!!",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/9512/9512451.png",
      imageWidth: 300,
      imageHeight: 250,
      color: "rgba(0,0,123)",
      backdrop: "rgba(0,0,123,0.4)",
      imageAlt: "Custom image",
      confirmButtonText: "Reiniciar"
    }).then(function() {
      window.location.reload();
    });
  }
}
