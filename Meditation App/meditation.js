// DOM
const breathe = document.querySelector('.circle');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const volumeRange = document.querySelector('.volumeRange');
const song = new Audio('breathe.mp3');

const slider = () => {
  song.volume = volumeRange.value / 100;
};

volumeRange.addEventListener('input', () => {
  slider();
});

play.addEventListener('click', () => {
  song.play();
  play.style.display = 'none';
  pause.style.display = 'inline-block';
  breathe.style.display = 'flex';
  breathe.style.animationPlayState = 'running';
});

pause.addEventListener('click', () => {
  song.pause();
  pause.style.display = 'none';
  play.style.display = 'inline-block';
  breathe.style.animationPlayState = 'paused';
});

stop.addEventListener('click', () => {
  song.pause();
  pause.style.display = 'none';
  play.style.display = 'inline-block';
  song.currentTime = 0;
  breathe.style.display = 'none';
});
