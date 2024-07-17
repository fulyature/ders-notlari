//**FOREACH METHODU */
const sayilar = [4, 5, 6, 2, 7, 1];
sayilar.forEach((x) => console.log(x));
console.log("************");
sayilar.forEach(function (x) {
  console.log(x);
});
console.log("************");
sayilar.forEach(yazdir);
function yazdir(x) {
  console.log(x);
}
//
//
//
sayilar.forEach((x, index) => console.log("değer:", x, "sırası:", index));
//
//
// ÖRNEK
//
let toplam = 0;
sayilar.forEach((sayi) => (toplam += sayi));
console.log("toplam", toplam);
//
//
const notlar = [40, 50, 25, 70, 80];
notlar.forEach((not, index, dizi) => {
  dizi[index] = not * 1.1;
});
console.log(notlar);
//
//
//burda bize bir değer donmuyor
const kare = notlar.forEach((x) => x * x);
console.log(kare);
//
//
//
notlar.forEach((x, y, z) => {
  z[y] = x * x;
});
console.log(notlar);
//
//**MAP */
//
//
const names = ["fulya", "zeynep", "yunus"];
const copiedNames = names.map((name) => name.toUpperCase());
console.log(copiedNames);
//
//
//ÖRNEK
const macBookTL = [9000, 7500, 6000, 40000, 30000];
const euro = 36.29;
const dolar = 33.06;
const euromacBook = macBookTL.map((fiyat) => Math.trunc(fiyat / euro));
console.log(euromacBook);
const dolarmacBook = macBookTL.map((fiyat) => Math.trunc(fiyat / dolar));
console.log(dolarmacBook);
//
//
//
//FİLTER
//
//
const maaslar = [90000, 75000, 41000, 40000, 30000];
const buyukler = maaslar.filter((maas) => maas >= 50000);
console.log(buyukler);
//
//
//
//**CHAİNİNG (PİPELİNE) */
//
const maaslar1 = [90000, 75000, 41000, 40000, 30000];
const zamli = maaslar1
  .filter((maas) => maas < 50000)
  .map((ücret) => ücret * 1.2);
console.log(zamli);
