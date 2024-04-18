//Variables
const shareIcon = document.querySelector(".share .fa-share");
const shareBar = document.querySelector(".social-bar");
const authorBar = document.querySelector(".author");

const activeState = () => {
  shareBar.classList.toggle("showBar");
  if (shareBar.classList.contains("showBar")) {
    shareIcon.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcon.style.color = "hsl(210, 46%, 95%)";
  }else{
    shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIcon.style.color = "hsl(214, 17%, 51%)";
  }
};
//Event handlers
document.addEventListener("DOMContentLoaded", () => {
  shareIcon.addEventListener('click', () =>{
    activeState();
  })
});
