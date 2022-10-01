/* Variables */

const darkModeBtn = document.querySelector(".dark-mode-btn");
const body = document.querySelector("body");

//Changing button style on click

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("active");
  body.classList.toggle("darkmode");
});
