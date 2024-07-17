// * ============================================
// *               KARAR YAPILARI
// * ============================================

// console.log("*** CONDITIONS ***");

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
// let sayi = 67;
// let kalan = sayi % 2;
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
//
//
//
//
// let num = +prompt("sayı giriniz");

// if (num > 0) {
//   console.log("sayı pozitif");
// } else if (num < 0) {
//   console.log("sayı negatif");
// } else if (num === 0) {
//   console.log("sayı sıfır");
// } else {
//   console.log("sadece sayı giriniz");
// }
//
//
//
// verilen en büyügünü bul
// let sayi1 = 150;
// let sayi2 = 25;
// let sayi3 = 30;
// if (sayi1 > sayi2 && sayi1 > sayi3) {
//   console.log("en büyük sayı: sayi1");
// } else if (sayi2 > sayi3 && sayi2 > sayi1) {
//   console.log("en büyük sayı: 2");
// } else {
//   console.log("en büyük sayı: 3");
// }

//js deki built in fks kullanımı
// const enb = Math.max(sayi1, sayi2, sayi3);
// console.log(enb);

//yaşı 18 den buy. oy kullanır, değilse kullanamaz

//let yas = 20;
// if(yas>18){
//   console.log("oy kullnır");
// }else{
//   console.log("kullanamaz");
// }

//? ternary
//1.
// yas > 18 ? console.log("oy kullanabılır") : console.log("oy kullanamaz");
// yas > 18 ? console.log("oy kullanabılır") : null;

//2.
// const message = yas > 18 ? "oy kullan" : "oy kullanma";
// message === "oy kullan"
//   ? console.log("seçim sandığına git")
//   : console.log("evde otur");

// const sayi = 20;
// sayi % 2 === 0 ? console.log("sayi çift") : console.log("sayi  tek");

//nested thernary
//eğer 14 den kucukse CSSLayerBlockRule, 14-18 arası ergen,18 ustu yetısgın

// const yas = 19;
// const sonuc =
//   yas <= 14
//     ? console.log("çocuk")
//     : yas <= 18
//     ? console.log("ergen")
//     : console.log("yetısgın");

// let num1 = -10;
// const sonuc =
//   num1 > 0 ? "sayı pozitıf" : num1 < 0 ? "sayı negatif" : "sayı 0 dır";
// console.log(sonuc);

// let sayi = 5;
// const sonuc = sayi < 0 ? "negatif" : sayi > 0 ? "pozitif" : "notr";
// console.log(sonuc);
//
//
//SHORT CIRCUT

// let maas = 40000;
// let yil = 5;
// maas=maas+maas*0.5
// yil > 10 && (maas =  maas * 1.5) : null
