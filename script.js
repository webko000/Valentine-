document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showMessage");
  const message = document.getElementById("message");
  const audio = document.getElementById("valentineSong");

  button.addEventListener("click", function () {
    message.classList.remove("hidden");
    button.style.display = "none";
    audio.play();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showMessage");
  const message = document.getElementById("message");
  const audio = document.getElementById("valentineSong");

  button.addEventListener("click", function () {
    message.classList.remove("hidden");
    button.style.display = "none";
    
    // Play the audio
    audio.play().catch(() => {
      alert("Please allow audio to play manually.");
    });
  });
});
