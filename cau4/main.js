const video = document.querySelector(".video");
const play = document.querySelector(".play-button img");
document.querySelector(".play-button").addEventListener("click", () => {
    video.play();
    play.src = "assets/pause-icon.svg";
})