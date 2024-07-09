// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // Örnek kullanım
// let input = "Merhaba dünya!";
// let reversed = reverseString(input);

// console.log(reversed);
// let abc = "Clarusway";
// let result = "";
// console.log(abc.length);
// for (let i = abc.length - 1; i >= 0; i--) {
//   result = result + abc[i];
// }
// console.log(result);
function tersYaz(abc) {
  let result = "";

  for (let i = abc.length - 1; i >= 0; i--) {
    result += abc[i];
  }

  return result;
}

console.log(tersYaz("fulya"));
