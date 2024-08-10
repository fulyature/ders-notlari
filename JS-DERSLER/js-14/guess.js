//**Pc ye sayı tutturduk.1-20 arasında olabilmesi için 20 ile çarpıp yukarı yuvarladık */

let rastgeleSayi = Math.ceil(Math.random() * 20);

let message = document.querySelector(".msg");
const tahmin = document.querySelector(".guess").value;

let myScore = 10;

let enYuksekSkore = 0;

//**her check butonuna basılınca olacaklar */

// document.querySelector.onclick=()=>{}

document.querySelector(".check").addEventListener("click", () => {
  //  if(!tahmin){

  //  }

  if (tahmin == "") {
    message.textContent = "lütfen bir tahmin giriniz";
  } else if (tahmin === rastgeleSayi) {
    message.textContent = "Tebrikler kazandınız";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;

    document.querySelector(".check").disable = true;
  } else {
    if (myScore > 1) {
      myScore--;
      document.querySelector(".my-score").textContent = myScore;

      tahmin > rastgeleSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttır");
    } else {
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
