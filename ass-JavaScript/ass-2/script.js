const body = document.querySelector("body");

const clickbtn = document.getElementById("click-btn");

const mouseoverbtn = document.getElementById("mouseover-btn");

const colorinput = document.getElementById("color-input");

const colortext = document.getElementById("color-text");

const colors = [
  "#6BFA98",
  "#6BFAF8",
  "#6BFAC8",
  "#71FA6B",
  "#6BCEFA",
  "#FA5986",
  "#F392FA",
  "#6C1BFA",
  "#FAEA7A",
];

clickbtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];

  colortext.innerText = `${colors[random]}`;
  //   colorinput.style.backgroundColor = colors[random];
});

mouseoverbtn.addEventListener("mouseover", function () {
  const random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];
});
