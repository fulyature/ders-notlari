const inputBox = document.getElementById("input-box");

const button = document.getElementById("button");

const message = document.querySelector(".message");

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 100);
  const guessedNbr = inputBox.value;
  if (guessedNbr === random) {
    message.textContent = "Tebrikler kazandınız";
  } else if (guessedNbr > random) {
    message.textContent = `Cevabınız sayıdan büyük`;
  } else if (guessedNbr < random) {
    message.textContent = `Cevabınız sayıdan küçük`;
  }
  inputBox.focus();
  console.log(random);
});
