//Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.
// let number = Math.trunc(Math.random() * 100);
// console.log(number);

// let count = 5;
// while (count > 0) {
//   let guess = +prompt("bir sayı giriniz");
//   count -= 1;
//   if (guess === number) {
//     console.log(`tebrikler ${5 - count}. denemenizde bildiniz`);
//     break;
//   } else if (guess < number) {
//     console.log("tahmininizi artırınız");
//   } else if (number < guess) {
//     console.log("tahmininizi azaltınız");
//   }
//   if (count == 0 && guess !== number) {
//     console.log("tahmin hakkınız kalmadı");
//   }
// }
let number = Math.trunc(Math.random() * 100);
console.log(number);
count = 1;
while (count <= 5) {
  let guess = prompt("Bir sayı giriniz:");
  if (guess == number) {
    console.log(`Tebrikler ${count}. denemenizde bildiniz!`);
    break;
  } else if (guess < number) {
    console.log("Tahmininizi artırınız");
  } else {
    console.log("Tahmininizi azaltınız");
  }
  count++;
  if (count > 5 && guess != number) {
    console.log("Tahmin hakkınız kalmadı!");
  }
}
