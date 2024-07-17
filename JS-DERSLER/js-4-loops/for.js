// for (let i = 1; i == 50; i = i * 2) {
//   console.log(i);
// }
//
//
//
// for(let i=i;i!=50;i=i*2){

// }
// //sonsuz döngü
// for(let i=1;;i/=2){

// }// //sonsuz döngü

//? örnek 50 kişinin notunu alan ve ort. hesaplayan kodu yazınız
// let i = 0;
// let sum = 0;
// for (i; i < 5; i++) {
//   const grade = Number(prompt(`Enter ${i}grade`));
//   sum = sum + grade;
// }
// console.log(i);
// console.log(`AVG:${sum / i}`);

//? geri yönde değişim yapabılırız
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
//
//
//?aralık verme
//?örnek:iki sayı arasındakindeki sayıların toplamını bulma:

// let num1 = 9;
// let num2 = 17;
// let sum = 0;
// if (num1 > num2) {
//   console.log("num2 ,num1den büyük olmalıdır");
// } else {
//   for (let i = num1; i <= num2; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
//
//2.yol
// let num1 = 9;
// let num2 = 17;
// let sum = 0;
// if (num1 > num2) {
//   console.log("num2 ,num1den büyük olmalıdır");
// } else {
//   for (num1; num1 <= num2; num1++) {
//     sum += num1;
//   }
//   console.log(sum);
// }

//?break , continue
for (let i = 0; i <= 10; i++) {
  if (i % 3) {
    continue;
  }
  if (i === 6) {
    break;
  }
  console.log(i);
}
