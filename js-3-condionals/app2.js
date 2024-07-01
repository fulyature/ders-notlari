// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***");

//! ************ IF - ELSE

// Programlama dillerinde kodlar yukarıdan aşağıya çalışır.Bu yapıyı değiştiren bazı durumlar vardır. Bunlardan biri karar yapılarıdır.
/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/
let sayi = 67;
let kalan = sayi % 2;
// console.log(kalan);

// if (kalan === 0) {
//   console.log("Sayı çifttir");
// } else {
//   console.log("sayı tektır");
// }
// SORU 1: Elektrik sinyali geliyor yada gelmiyor bu duruma göre lamba yanar, lamba yanmaz yazan kod bloğunu oluşturun
// let sinyal = prompt("elektrik sinyali geliyor mu?(evet/hayır)");
// if (sinyal === "evet") {
//   console.log("lamba yanar");
// } else if (sinyal === "hayır");
// {
//   console.log("yanmaz");
// }

let num = +prompt("sayı giriniz");

if (num > 0) {
  console.log("sayı pozitif");
} else if (num < 0) {
  console.log("sayı negatif");
} else if (num === 0) {
  console.log("sayı sıfır");
} else {
  console.log("sayı giriniz");
}
