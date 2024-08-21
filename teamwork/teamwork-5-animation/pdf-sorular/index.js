console.log("sorular");
//**2.soru */
const personel = {
  name: "Ali",
  surname: "Demir",
  city: "Istanbul",
};

console.log(personel.name);
console.log(personel.surname);
console.log(personel.city);
//**3. soru */
console.log(personel.hasOwnProperty("age"));
console.log(personel.hasOwnProperty("name"));
//**4. How do you delete a property from an object in JavaScript */
const student = {
  name: "Ali",
  surname: "Yıldız",
  number: "B120102009",
  age: 18,
};

delete student.age;
console.log(student);
console.log(student.age);
// //
// student.age = "";
// console.log(student);
// console.log(student.age);
// //
// student.age = null;
// console.log(student);
// console.log(student.age);
//
//**5. How do you add a new property to an existing object in JavaScript */
student.city = "Izmir";
console.log(student);
student.country = "Turkiye";
console.log(student);

//
//**6. How do you clone an object in JavaScript? */
const clone = Object.assign({}, student);
console.log(clone);

const clone2 = { ...student };
console.log(clone2);
//
//
//** 7. What is object destructuring in JavaScript?*/
const { name, surname } = student;
console.log(name);
console.log(surname);
//
//**8. */
const students = [
  {
    name: "Ali",
    surname: "Yıldız",
    number: "B120102009",
    age: 18,
  },

  {
    name: "Veli",
    surname: "Sarı",
    number: "B120102010",
    age: 19,
  },
];
//**9. How do you add an element to the end of a JavaScript array? */
const colors = ["pink", "blue", "black"];
// colors.push("red");
// console.log(colors);
//
//
// console.log(colors[0]);
//
//11. How do you remove a specific element from a JavaScript array?
colors.splice(0, 1, "brown");
console.log(colors);
//
//
//** 12. What method is used to add elements to the beginning of a JavaScript array?*/
//
// colors.unshift("white");
// console.log(colors);
//
//13. How do you find the index of the last occurrence of a specific element in a JavaScript array?
//

// const names = ["ali", "veli", "ayşe", "zeynep", "ali"];
// console.log(names.lastIndexOf("ali"));
//
//14.
// console.log(Array.isArray(names));
//
//
//16
// const names1 = names.slice(0);
// console.log(names1);
// names.push("fulya", "yunus");
// console.log(names);
// console.log(names1);
//
//
//17
//
// const arr1 = [1, 2, 10];
// result = 0;
// for (num of arr1) result += num;
// console.log(result);
//
//
//18
//
//
//19
//
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
//
//20

let arr2 = [1, 2, 3];
arr2.forEach(function (element, index, array) {
  array[index] = element * 2;
});
console.log(arr2);
//
//
//**Coding Challenges */

function toRoman(num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const thousand = thousands[Math.floor(num / 1000)];
  const hundred = hundreds[Math.floor((num % 1000) / 100)];
  const ten = tens[Math.floor((num % 100) / 10)];
  const one = ones[num % 10];

  return thousand + hundred + ten + one;
}

console.log(toRoman(457)); //CDLVII
console.log(toRoman(148)); //CXLVIII

console.log(toRoman(2158)); //MMCLVIII

const bulbirler = function (num) {
  return num % 10;
};
console.log(bulbirler(8));
function bulonlar(num) {
  const onlar = Math.trunc(num / 10);
  return onlar;
}
console.log(bulonlar(25));
function bulyuzler(num) {
  const yuzler = Math.trunc(num / 100);
  return yuzler;
}
console.log(bulyuzler(150));

//
function areAnagrams(str1, str2) {
  function search(str) {
    return str.split("").sort().join("");
  }

  let yenistr1 = search(str1);
  let yenistr2 = search(str2);

  return yenistr1 === yenistr2;
}

console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("triangle", "integral"));
console.log(areAnagrams("The Morse Code", "Here come dots"));
