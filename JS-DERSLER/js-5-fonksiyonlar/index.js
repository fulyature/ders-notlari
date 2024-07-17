// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//fonksiyonlar call yapılmadığı takdirde okunmaz

function yazdir() {
  console.log("hi world");
}
console.log("--function declaration");
yazdir();

/** Hoisting-yükseltmek, kaldırma */
yazdir1();
function yazdir1() {
  console.log("hoisting");
}
//js kodu yukarıdan aşağı okur

//örnek 2 paremetreli fonksiyonlar

// function adYazdir(ad) {
//   console.log("merhaba", ad);
// }
// adYazdir("Zeynep");
// let name = "Begüm";
// adYazdir(name);
// let sayi = 300;
// adYazdir(sayi);

//fonksiyonlarda değişkenin değeri gider

function adYazdir(ad, soyad = "cw ailesi", no = "000") {
  console.log("merhaba", ad, soyad, no);
}
adYazdir("Zeynep", "Türe", 123);
// fks cağırılrken gönderilen değere parametra denir
//fks değişkenin değeri gönderilir, değişkenin kendi  değil
adYazdir("Zeynep");

function degerler(s1, s2, s3) {
  console.log(arguments);
}
degerler(3, 258, 369, 147, 85, 963, 85);

function deneme(ad, soyad, renkler, kitap) {
  console.log(ad);
  console.log(soyad);
  console.log(renkler);
  console.log(kitap);
}

deneme("ali", "demis", ["mavi", "pembe", "yeşil"]);

//** Return keyword */

//****örnek3 parametreli, dönüş değerli (return)*****
// function yasHesapla(isim, tarih) {
//   console.log("Benim adım", isim, "ben", 2024 - tarih, "ındayım");
//   let yas = 2024 - tarih;
//   return yas;
// }

// const yas = yasHesapla("Ali", 1990);

// if (yas > 30) {
//   console.log("Bu iş için yaşınız uygun");
// }

// function yasHesapla(isim, tarih) {
//   console.log("Benim adım", isim, "ben", 2024 - tarih, "ındayım");
//   let yas = 2024 - tarih;
//   return yas;
// }

// const yas = yasHesapla("Ali", 1990);

// if (yas > 30) {
//   console.log("Yas 30 dan büyük");
// } else {
//   return "yas 40dan küçük";
// }

//
// function dairecevrehesapla(r) {
//   let cevre = 2 * 3.14 * r;
//   return cevre;
// }
// const result = dairecevrehesapla(1);
// console.log(result);

// function dairecevrehesapla2(r) {
//   let cevre2 = 2 * 3.14 * r;
//   console.log(cevre2);
// }
// dairecevrehesapla2(1);

// function daireAlanı(r) {
//   let alan = 3.14 * r ** 2;
//   return alan;
// }
// const result2 = daireAlanı(1);
// console.log(result2);

//function expression
//burda hoisting yok
//önce fks olusturmak sart
const adYazdir1 = function (ad) {
  console.log(ad);
};
adYazdir1("fulya");
