const body = document.querySelector("body");

const clickbtn = document.getElementById("click-btn");

const mouseoverbtn = document.getElementById("mouseover-btn");

const colorinput = document.getElementById("color-input");

const colortext = document.getElementById("color-text");

// const colors = [
//   "#6BFA98",
//   "#6BFAF8",
//   "#6BFAC8",
//   "#71FA6B",
//   "#6BCEFA",
//   "#FA5986",
//   "#F392FA",
//   "#6C1BFA",
//   "#FAEA7A",
// ];
function randomHex() {
  const hexChars = "0123456789ABCDEF";
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    hexNumber += hexChars[randomIndex];
  }
  return hexNumber;
}
clickbtn.addEventListener("click", function () {
  body.style.backgroundColor = randomHex();
  // const random = Math.floor(Math.random() * colors.length);
  // body.style.backgroundColor = colors[random];

  colortext.textContent = randomHex();
  //   colorinput.style.backgroundColor = colors[random];
});

mouseoverbtn.addEventListener("mouseover", function () {
  body.style.backgroundColor = randomHex();
  colortext.textContent = randomHex();
  // const random = Math.floor(Math.random() * colors.length);
  // body.style.backgroundColor = colors[random];
});

// document.querySelector("#color-input").onchange = (event) => {
//   const newColor = event.target.value;
//   body.style.backgroundColor = newColor;
// };
colorinput.addEventListener("input", function (event) {
  const newColor = event.target.value;
  body.style.backgroundColor = newColor;
  colortext.textContent = newColor;
});
