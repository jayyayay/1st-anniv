const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const startBtn = document.getElementById('startBtn');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('surpriseVideo');
const message = document.getElementById('message');

const popupTextFull = "Happy Anniversary Lovee 💖";
let index = 0;

function typePopup() {
  if (index < popupTextFull.length) {
    popupText.textContent += popupTextFull.charAt(index);
    index++;
    setTimeout(typePopup, 100);
  } else {
    setTimeout(() => {
      startBtn.classList.remove('hidden');
    }, 800);
  }
}

typePopup();

startBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  setTimeout(showVideo, 500);
});

function showVideo() {
  videoContainer.style.display = 'flex';
  video.play();
}

video.addEventListener('ended', () => {
  fadeToMessage();
});

function fadeToMessage() {
  videoContainer.style.opacity = 0;
  setTimeout(() => {
    videoContainer.style.display = "none";
    showMessage();
  }, 1500);
}

function showMessage() {
  message.innerHTML = `
    Hari ini bukan cuma tentang tanggal, tapi tentang setiap momen kecil yang udah kita lewatin bareng.<br><br>
    Dari tawa, marah, cemburu, sampe hal-hal kecil yang bikin aku makin yakin kalau kamu itu spesial banget 💞<br><br>
    Aku tau kadang aku ngeselin, tapi kamu selalu sabar dan tetep sayang.<br><br>
    Makasih yaa udah jadi rumah yang selalu aku cari, tempat aku balik, tempat aku nyaman.<br><br>
    Aku cuma mau bilang satu hal — aku bersyukur banget punya kamu.  
    Happy anniversary, love. Ini semua buat kamu 💖✨
  `;
  message.style.display = 'block';
}
