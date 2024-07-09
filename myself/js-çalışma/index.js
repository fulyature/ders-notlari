//**O-100 arasında n kadar rasgele sayı üretmek */
//**round ile yuvarlama yapıyorsan 99,5 i 100 e yuvarlar. yani 100 değeri gelir.virgülden sonra 5 ve üzerini üste yuvarlar */
// let number = +prompt("kaç tane rasgele sayı üretmek istiyorsun");
// for (let i = 0; i <= number; i++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   console.log(`${i}. sayı: ${rasgeleSayi}`);
// }
//
//
//**Girilen bir sayının asal olup olmadığını for döngüsü ile yazın */
//

// let sayi = +prompt("bir sayı girin");
// let sonuc = true;
// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     sonuc = false;
//     break;
//   }
// }
// if (sonuc) {
//   console.log(`${sayi} asaldır`);
// } else {
//   console.log(`${sayi} asal değildir`);
// }
//
// 2. yol
// let sayi = +prompt("bir sayı girin");
// let counter = 0;
// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     counter++;

//     break;
//   }
// }

// console.log(counter > 0 ? "asal değil" : "asal");
//
//**Kullanıcıcan 0-100arası not isteyen döngü do-while ile çöz */
let not = +prompt("Notunuzu giriniz");
while (not < 0 || not > 100) {
  console.log("notunuz 0 dan kucuk 100 den buyuk olamaz");
  not = +prompt("doğru Notunuzu giriniz");
}
console.log(`notunuz: ${not}`);
