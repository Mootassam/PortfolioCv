var audio = document.getElementById("my_audio");
var stop = document.getElementById("stop");
var play = document.getElementById("play");
play.style.display = "none";
function playAudio() {
  audio.play();
  play.style.display = "block";
  stop.style.display = "none";
}

function pauseAudio() {
  audio.pause();
  play.style.display = "none";
  stop.style.display = "block";
}
