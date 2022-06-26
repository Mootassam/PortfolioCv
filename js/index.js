var audio = document.getElementById("my_audio");
var stop = document.getElementById("stop");
var play = document.getElementById("play");

const header = document.querySelector(".header");
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

// window.addEventListener("scroll", (event) => {
//   console.log("Scrolling...");
//   header.style = "background-color:rgb(43,45,51)";
// });
