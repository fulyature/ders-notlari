// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

// function selamla() {
//   console.log("selam");
// }
// selamla();
// const selamlar = function () {
//   console.log("merhaba");
// };
// selamlar();
// //arrow

// const selamla1 = () => {
//   console.log("merhaba");
// };
// //tek satırlarda  {} ve returna gerek yok

// const selamla2 = () => console.log("hi");

// //örnek 1 paremetra alan-return ve {}
// //3 ün katlarını bulan fks

// const kontrol = (num) => {
//   result = num % 3 === 0 ? "3ün katıdır" : "3ün katı değildir";
//   return result;
// };
// console.log(kontrol(45));

// const kontrol1 = (num) =>
//   num % 3 === 0 ? "3 ün katıdır" : "3ün katı değildir";
// console.log(kontrol1(14));

// const topla = (a, b) => {
//   result = a + b;
//   return result;
// };
// console.log(topla(1, 2));

// const topla1 = (a, b) => console.log(a + b);
// topla1(4, 5);

// const topla2 = (a, b) => a + b;
// console.log(topla2(1, 3));
// const çık = (a, b) => a - b;
// console.log(topla2(1, 3));
// const çarp = (a, b) => a * b;
// console.log(topla2(1, 3));
// //silindir hacmi

// const hacim = (r, h) => 3.14 * r ** 2 * h;
// console.log(hacim(1, 1));

const buyukBul = (a, b) => (a > b ? `büyük sayı :${a}` : `büyük sayı :${b}`);
console.log(buyukBul(1, 2));

const maxBul = (a, b) => (a > b ? "a değeri büyüktür" : "b değeri büyüktür");
console.log(maxBul(123, 12));

//verilen değere kadar olan asal saylarıbul

// const asal1 = (num) =>
//   num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0
//     ? `${num} asal`
//     : `${num} asal değildir`;
// console.log(asal1(11));
// const asal = (num) => {
//   if (num < 2) {
//     console.log("bu sayıya kadar olan asal sayı yok");
//     return;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (i === 2) {
//       console.log(i);
//     } else {
//       let entry = true;
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           entry = false;
//           break;
//         }
//       }
//       entry ? console.log(i) : "";
//     }
//   }
// };
// asal(29);

//recursiffunction
//kendi kendini çağırab fonksiyonlar

const toplam = (n) => {
  let toplam = 0;
  for (let i = 1; i <= n; i++) {
    toplam = toplam + i;
  }
  console.log(toplam);
};
toplam(8);

//

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};
console.log(toplamlar(8));

//faktöriel

const fact = (n) => {
  if (n === 1) {
    return n;
  } else {
    {
      return n * fact(n - 1);
    }
  }
};
console.log(fact(4));

//fibonacci

const fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
console.log(fibonacci(3));

//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */

(function () {
  console.log("merhaba");
})();

//*parametre gonderme

(function (a, b) {
  let toplam = a + b;
  console.log(toplam);
})(1, 2);

//*
//üs alma
(function (a, b) {
  let us = a ** b;
  console.log(us);
})(6, 3);

const result = (function (a, b) {
  let us1 = a ** b;

  return us1;
})(3, 3);

console.log(result);
//
//*değişken kapsülleme

//
//
//*CALLBACK FUNCTİON
//
//a:argument
function deneme(a) {
  console.log(a);
}
//67 değeri parametredir
deneme(67);
//
//***Callback function */
// JavaScript'te callback fonksiyonları, bir fonksiyonun başka bir fonksiyona argüman olarak geçirilip, bu fonksiyonun daha sonra çağrılması prensibine dayanır.

//
//
function ilkFonksiyon(zeynep) {
  console.log("ilk fonksiyon");
}
function ikinciFonksiyon(num) {
  console.log("ikinci fks", num);
}
ilkFonksiyon(ikinciFonksiyon);

//** */
function matematikselIslem(sayi1, sayi2, islem) {
  const sonuc = islem(sayi1, sayi2);
  console.log(sonuc);
}
function topla(a, b) {
  return a + b;
}
function cıkar(a, b) {
  return a - b;
}
matematikselIslem(45, 15, topla);
matematikselIslem(45, 15, cıkar);
