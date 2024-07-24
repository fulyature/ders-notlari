const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//
//3. soru
countries.forEach((country) => {
  console.log(country);
});
//
//4. soru
names.forEach((name) => {
  console.log(name);
});
//
//6.soru
const upperCaseCountries = countries.map((country) => country.toUpperCase());

console.log(upperCaseCountries);
//
//7. soru

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength); //
//

const countriesLength1 = [];
countries.map((country) => {
  countriesLength1.push(country.length);
});
console.log(countriesLength);

//
//8. soru
const kare = numbers.map((item) => item * item);
console.log(kare);
//
//9. soru
const upperCase = names.map((item) => item.toLocaleUpperCase());
console.log(upperCase);
//
// 10. soru
const prices = products.map((item) => item["price"]);
const prices2 = products.map((item) => item.price);
console.log(prices);
console.log(prices2);

products.forEach((item) => console.log(item.price));
//
//11. soru
const landFilter = countries.filter((item) =>
  item.toLowerCase().includes("land")
);
console.log(landFilter);
//
//2. yol
const newLand = countries.filter(
  (country) => country.includes("land") || country.includes("Land")
);
console.log(newLand);
//13. soru
const six = countries.filter((country) => country.length === 6);
console.log(six);
//*******
const sixMore = countries.filter((country) => country.length >= 6);
console.log(sixMore);
//14. soru
const includeE = countries.filter((item) => item.startsWith("E"));
console.log(includeE);
//
//15. soru
