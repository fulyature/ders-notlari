// console.log("gg");
// let i = 1;
// while (i <= 10) {
//   console.log(i, "cocort");
//   i++;
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i, "cohort");
// }
// console.log("döngü bitti");
// let number = +prompt("0-100 arasında bir sayı giriniz");
// while (number < 0 || number > 100) {
//   console.log("Sayı 0-100 arasında olmalı");
//   number = prompt(
//     "0-100 arasında bir sayı giriniz veya çıkmak için Q tuşuna basınız"
//   );
//   //   if (number === "q" || number === "Q") {
//   //     break;
//   //   }
//   if (number.toLowerCase() === "q") {
//     break;
//   }
// }
//console.log("girilen sayı:", number);
//
//
let number = +prompt("0-100 arasında bir sayı giriniz");
while (number < 0 || number > 100) {
  console.log("Sayı 0-100 arasında olmalı");
  number = prompt(
    "0-100 arasında bir sayı giriniz veya çıkmak için Q tuşuna basınız"
  );
  //   if (number === "q" || number === "Q") {
  //     break;
  //   }
  if (number.toLowerCase() === "q") {
    break;
  }
}
console.log("girilen sayı:", number);
