// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// //
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// //
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
//
// let i = 10;
// for (i; i >= 0; i--) {
//   console.log(i);
// }

//
// //
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// //
// //
//
//
// let str = "";
// for (let i = 1; i <= 7; i++) {
//   str += "#";
//   console.log(str);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`${i}*${i} = ${i * i}`);
// }

// console.log("i i^2 i^3");
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

//
//
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//
// for (let i = 2; i <= 100; i++) {
//   if (i === 2 || i === 3 || i === 5 || i === 7) {
//     console.log(i);
//   } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//     console.log(i);
//   }
// }
// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// let i = 0;
// let sum = 0;
// for (i; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// function random(length) {
//   // Karakter setimizi burada tanımlıyoruz.
//   var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   // Rastgele karakter seçimi
//   var str = "";
//   for (let i = 0; i < length; i++) {
//     str += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return str;
// }
// console.log(random(4));
// console.log(random(15));
// console.log(random(20));

// function hexNum(length) {
//   let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let hex = "";
//   for (let i = 0; i < length; i++) {
//     hex += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return hex;
// }

// console.log(`#${hexNum(8)}`);

//
//
function rgbfks() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(rgbfks());
// //
//
const arr = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
