let dropDownPlus = document.querySelectorAll("svg");
// let textArea = document.querySelectorAll(".textarea");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

let img1 = document.querySelector(".icon1");
let img2 = document.querySelector(".icon2");
let img3 = document.querySelector(".icon3");

console.log(img2);
img1.addEventListener("click", () => {
  one.classList.toggle("display1");
  two.classList.remove("display1");
  three.classList.remove("display1");
});

img2.addEventListener("click", () => {
  two.classList.toggle("display1");
  one.classList.remove("display1");
  three.classList.remove("display1");
});

img3.addEventListener("click", () => {
  three.classList.toggle("display1");
  one.classList.remove("display1");
  two.classList.remove("display1");
});
