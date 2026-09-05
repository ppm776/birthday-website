// 🎂 Countdown Timer (Sept 8, 2026)
const birthday = new Date("Sep 08, 2026 00:00:00").getTime();
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = birthday - now;
  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "It's her Birthday! 💖✨";
  }
}, 1000);
// Toggle background music with "M" key
document.addEventListener("keydown", function(event) {
  if (event.key.toLowerCase() === "m") {
    const music = document.getElementById("bg-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
});
