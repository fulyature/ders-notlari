import "./scss/style.scss";
import { getCoins } from "./src/getCoins.js"; //named export

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("form submit oldu");
  getInputVal();
  //e.target.reset();
  form.reset();
});

const getInputVal = () => {
  const inputVal = document.querySelector("header form input").value;
  //document.querySelector("header form input").value = ""; formun getırdıgı özellik olan reset metodunu kullanabılırsın  //e.target.reset();
  //form.reset()

  //console.log(inputVal);
  if (!inputVal.trim()) {
    alert("input not be blank!");
  } else {
    //console.log("input doldu");
    getCoins();
  }
};
