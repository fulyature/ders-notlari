function convertToRoman(num) {
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
console.log(convertToRoman(457)); //CDLVII
console.log(convertToRoman(2008)); //  MMVIII
console.log(convertToRoman(148)); //  CXLVIII
console.log(convertToRoman(8)); //VIII
//
//
//
//
const bulbirler = function (num) {
  return num % 10;
};
console.log(bulbirler(8));
function bulonlar(num) {
  const onlar = Math.floor((num % 100) / 10);
  return onlar;
}
console.log(bulonlar(45));
function bulyuzler(num) {
  const yuzler = Math.floor((num % 1000) / 100);
  return yuzler;
}
console.log(bulyuzler(500));
//**Soru 2 */
// function areAnagrams(str1, str2) {
//   // Temizleme ve düzenleme işlemi için bir yardımcı fonksiyon
//   function cleanString(str) {
//     return str

//       .toLowerCase() // Küçük harflere dönüştür
//       .split("") // Karakterlere ayır
//       .sort() // Karakterleri sırala
//       .join(""); // Tekrar birleştir
//   }

//   // İlk string'i temizle ve sırala
//   let cleanedStr1 = cleanString(str1);
//   // İkinci string'i temizle ve sırala
//   let cleanedStr2 = cleanString(str2);

//   // Temizlenmiş ve sıralanmış stringleri karşılaştır
//   if (cleanedStr1 === cleanedStr2) {
//     return true; // Eğer eşitse, anagramdır
//   } else {
//     return false; // Eğer eşit değilse, anagram değildir
//   }
// }

// // Test örnekleri
// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("dene", "deneme")); // true
// console.log(areAnagrams("hello", "world")); //false
// //
//
function karsilastir(str1, str2) {
  function search(str) {
    return str.split("").sort().join("");
  }
  let yenistr1 = search(str1);
  let yenistr2 = search(str2);
  return yenistr1 === yenistr2;
}

// console.log(search("LİSTEN"));
// console.log(search("SİLENT"));
console.log(karsilastir("listen", "silent"));
console.log(karsilastir("dene", "deneme"));
console.log(karsilastir("The Morse Code", "Here come dots"));

//
//
//
// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words);
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split("");
// console.log(chars);
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
//
//
//
//JOİN ARRY İÇİN YER ALAN BÜTÜN ELEMANLARI BİRLEŞTİREREK STRİNGE ÇEVİRİR
// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// // Expected output: "FireAirWater"

// console.log(elements.join("-"));
// // Expected output: "Fire-Air-Water"
