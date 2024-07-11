//**O-100 arasında n kadar rasgele sayı üretmek */
//
//
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
//
//
// let not = +prompt("Notunuzu giriniz");
// while (not < 0 || not > 100) {
//   console.log("notunuz 0 dan kucuk 100 den buyuk olamaz");
//   not = +prompt("doğru Notunuzu giriniz");
// }
// console.log(`notunuz: ${not}`);
//
//
//**konsoldan girilen sayı tek veya çift old. hesapla */
//
//
// function hesapla(num) {
//
//   if (num % 2 === 0) {
//     return "çift";
//   } else return "tek";
// }
// const sayi = prompt("bir sayı girin");
// console.log(hesapla(sayi));
//
//
// function hesapla(num) {
//   let result;
//   if (num % 2 === 0) {
//     result = "çift";
//   } else result = "tek";
//   return result;
// }
// const sayi = prompt("bir sayı girin");
// console.log(hesapla(sayi));
//
//
// function hesapla(sayi) {
//   return sayi % 2 === 0 ? "çift " : "tek";
// }
// const sayi = prompt("bir sayı girin");
// console.log(hesapla(sayi));
//
//
// const oddEven = function (num) {
//   return num % 2 === 0 ? "even" : "odd";
// };
// console.log(oddEven(6));
//
//
//**Arorw fks  ile  doğum tarıhını paremetre olarak alan ve ana programa yası hesaplayıp donduren*/
//
//
// const yasHesapla = (dYıl) => {
//   sonuc = new Date().getFullYear() - dYıl;
//   return sonuc;
// };
// let abc = +prompt("doğum tarıhını girin");
// console.log(`yaşınız ${yasHesapla(abc)}`);
//
//
// const yasHesapla = (dYıl) => new Date().getFullYear() - dYıl;

// let abc = +prompt("doğum tarıhını girin");
// console.log(`yaşınız ${yasHesapla(abc)}`);
//
//
//**Silindirin hacmi bul */
//
//
// const hacim = (r, h) => {
//   const sonuc = 2 * Math.PI * r ** 2 * h;
//   return sonuc;
// };
// console.log(`hacim: ${hacim(1, 1).toFixed(3)}`);
//
//
//**Hesap makinesi örneği */
//
//
// const add = (a, b) => a + b;
// const cıkar = (a, b) => a - b;
// const bol = (a, b) => a / b;
// const carp = (a, b) => a * b;

// const dortIslem = (n1, n2, operator) => {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = add(n1, n2);
//       break;
//     case "-":
//       result = cıkar(n1, n2);
//       break;
//     case "*":
//     case "x":
//       result = carp(n1, n2);
//       break;
//     case "/":
//       result = bol(n1, n2);
//       break;
//     default:
//       alert("yanlıs opt.");
//       result = "error";
//       break;
//   }
//   return result;
// };

// const x = +prompt("first number gir");
// const y = +prompt("second number gir");
// const operator = prompt("operator gir");
// console.log(
//   `giriln ilk sayı:${x},girilen ikinci ${y} sonuc= ${dortIslem(
//     x,
//     y,
//     operator
//   )} `
// );
//
//
//*faktöriel
//
//
// const fakto = (n) => {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result = result * i;
//   }
//   return result;
// };

// const number = +prompt("sayıyı gırınız");
// console.log(`girilen sayının faktörieli = ${fakto(number)}`);
//
//
//**RECURSİVE */
//Öz yenileme, kendi kendini çağıran fks dir
//
//
//**örnek:tavlo zarı fks */
//
//
//
// function zar() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// zar();
//
//
//**2 zar atılacak, sonu.ları 2-3, 3-5 gibi sergilesin. */
//**her zaman solda küçük olan olacak */
//**sonuc esşit gelirse. consolda tebrikler 4-4 attınız yazsın */
//
//
// const zar = () => {
//   const zarAt = () => Math.floor(Math.random() * 6) + 1;
//   let zar1 = zarAt();
//   let zar2 = zarAt();
//   if (zar1 === zar2) {
//     console.log(`${zar1}-${zar2} şeklinde attınız`);
//   } else {
//     zar1 = zar2 ? console.log(`${zar1}=${zar2} kazandınız..`):
//     (zar1 < zar2
//       ? console.log(`${zar1},${zar2}  `)
//       : zar1 > zar2 ? console.log(`${zar2},${zar1}`))
//   }
// };

// zar();
//
//
//**Artık yıl hesapla */
//
//
//**Çİftlikteki hayvan sayılarını parametre alan ve ayak sayılarını. toplamı hesapla */
// tavuk=2, antilop:4 , koyun:4, ördek:2
// const ayakHesapla = (tavuk, antilop, koyun, ördek) => {
//   let toplam = (tavuk + ördek) * 2 + (antilop + koyun) * 4;
//   console.log(toplam);
// };
// ayakHesapla(5, 3, 8, 12);
//
//
//**Kelime ters çevir */

//
//

function tersCevir(kelime) {
  let tersKelime = "";
  for (let i = kelime.length - 1; i >= 0; i--) {
    tersKelime += kelime[i];
  }
  return tersKelime;
}
tersCevir("fulya");
//
//
// function tersYaz(abc) {
//   let result = "";

//   for (let i = abc.length - 1; i >= 0; i--) {
//     result += abc[i];
//   }

//   return result;
// }

// console.log(tersYaz("fulya"));
//
//
//**Polindrom Sayı MADAM,, ANA */
//
//
const polindromKelime = (kelime, tersCevir) =>
  tersCevir(kelime) === kelime
    ? console.log("polindrom")
    : console.log("polindrom değildir");
polindromKelime("madam", tersCevir);
polindromKelime("fulya", tersCevir);
