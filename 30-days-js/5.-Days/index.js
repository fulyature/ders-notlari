const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//*1.
const emty = [];
console.log(emty);
const arr = Array(8);
console.log(arr);

// arr[1] = 8;
console.log(arr);
const newArr = arr.splice(3, 0, 9);
console.log(newArr);

const variable = ["ahmet", 2, true, "5,", {}, "hi", "clarusway"];
console.log(variable.length);
const lastEl = variable[variable.length - 1];
console.log(lastEl);
console.log(variable[0]);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);

function dondur(abc) {
  let result = "";

  for (let i = 0; i < abc.length; i++) {
    console.log(abc[i]);
  }
  return result;
}
dondur(itCompanies);

// function tersYaz(abc) {
//     let result = "";

//     for (let i = abc.length - 1; i >= 0; i--) {
//       result += abc[i];
//     }

//     return result;
//   }

//   console.log(tersYaz("fulya"));
// console.log(itCompanies[0].toLocaleUpperCase());
// const word = itCompanies.join(",");
// console.log(word);

// function check(campany) {
//   if (itCompanies.includes(campany)) {
//     return campany;
//   } else {
//     return "company is not found";
//   }
// }
// console.log(check("google"));
// console.log(check("Google"));

// const checkCompany = (comp) => {
//   if (itCompanies.includes(comp)) {
//     return comp;
//   } else {
//     return "company is not found";
//   }
// };
// console.log(checkCompany("deneme"));
// let def = itCompanies.sort();
// console.log(def);
// console.log(itCompanies.sort().reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(2, 3));
console.log(itCompanies.slice(3, 6));
console.log(itCompanies.splice(3, 1));
console.log(itCompanies);
console.log(itCompanies.splice(0));
console.log(itCompanies);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

console.log(text);

let clear = text.replaceAll(",", "").replaceAll(",", "");
console.log(clear.split(" "));

const shoppingCart = ["milk", "coffe", "tea", "honey"];
shoppingCart.unshift("meat");
console.log(shoppingCart);
shoppingCart.push("sugar");
console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

const backEnd = ["Node", "Express", "MongoDB"];

const fullstack = frontEnd.concat(backEnd);
console.log(fullstack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let ages1 = ages.sort((a, b) => a - b);
// console.log(ages1);

function ortanca(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr, "Sıralanmıs array");
  const orta = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[orta - 1] + arr[orta]) / 2;
  } else {
    return arr[orta];
  }
}
const medyan = ortanca(ages);
console.log(medyan);
