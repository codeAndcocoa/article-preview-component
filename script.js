//Variables
const shareIcon = document.querySelector(".share .fa-share");
const shareBar = document.querySelector(".social-bar");
const authorBar = document.querySelector(".author");

//Event handlers
document.addEventListener("DOMContentLoaded", () => {
  shareIcon.addEventListener("click", () => {
    shareBar.classList.toggle("showBar");
   
    /* shareIcon.style.backgroundColor = "hsl(217, 19%, 35%)";
    shareIcon.style.color = "hsl(210, 46%, 95%)";
   
  }); */
});
shareIcon.addEventListener("click", () => { shareIcon.classList.toggle("changeColors");});
});

// hsl(217, 19%, 35%); /* Very Dark Grayish Blue */
//   --color2: hsl(214, 17%, 51%); /* Desaturated Dark Blue */
//   --color3: hsl(212, 23%, 69%); /* Grayish Blue */
//   --color4: hsl(210, 46%, 95%);
