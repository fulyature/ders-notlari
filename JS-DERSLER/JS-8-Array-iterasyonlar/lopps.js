//************************For Lops******************* /
//
//Örnek
//
const maaslar = [50000, 35000, 120000, 44000];
let sum = 0;
for (let i = 0; i < maaslar.length; i++) {
  sum += maaslar[i];
}
console.log("SUM:", sum);
//
//
//ÖRNEK
//
// const notlar = [55, 60, 45,20];
// let not1 = [];
// let not2 = [];
// for (let i = 0; i < notlar.length; i++) {
//   if (notlar[i] > 50) {
//     not1.push(notlar[i]);
//   } else {
//     not2.push(notlar[i]);
//   }
// }
// console.log(not1);
// console.log(not2);
//
//
//**FOR IN DONGUSU */
//
//
const sayılar = [5, -10, 25];
let sonuc = 0;
for (let i in sayılar) {
  sonuc += sayılar[i];
}
console.log(sonuc);
//
//
//
// const notlar = [55, 60, 45, 2];
// let not1 = [];
// let not2 = [];
// for (let i in notlar) {
//   notlar[i] < 50 ? not1.push(notlar[i]) : not2.push(notlar[i]);
// }
// console.log(not1);
// console.log(not2);
//
//
//
const salary = [50000, 35000, 120000, 44000];
total = 0;
for (let i in salary) {
  total += salary[i];
}
const average = total / salary.length;
console.log(`average: ${average}`);
//
//
//****FOR OF DONGUSU */
//
//
const notlar = [55, 60, 45, 2];
let not1 = [];
let not2 = [];
for (let i of notlar) {
  i < 50 ? not1.push(i) : not2.push(i);
}
console.log(not1);
console.log(not2);
