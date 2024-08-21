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
//
// const text = "clarusway";
// const arr = text.split("").reverse().join("");
// console.log(arr);
//bu stringi ters yazadır
//
//
//

function tersYaz(abc) {
  let result = "";

  for (let i = abc.length - 1; i >= 0; i--) {
    result += abc[i];
  }

  return result;
}

console.log(tersYaz("fulya"));
//
//

function areAnagrams(str1, str2) {
  // Temizleme ve düzenleme işlemi için bir yardımcı fonksiyon
  function cleanString(str) {
    return str
      .replace(/[^\w]/g, "") // Tüm noktalama işaretlerini ve boşlukları kaldır
      .toLowerCase() // Küçük harflere dönüştür
      .split("") // Karakterlere ayır
      .sort() // Karakterleri sırala
      .join(""); // Tekrar birleştir
  }

  // İlk string'i temizle ve sırala
  let cleanedStr1 = cleanString(str1);
  // İkinci string'i temizle ve sırala
  let cleanedStr2 = cleanString(str2);

  // Temizlenmiş ve sıralanmış stringleri karşılaştır
  if (cleanedStr1 === cleanedStr2) {
    return true; // Eğer eşitse, anagramdır
  } else {
    return false; // Eğer eşit değilse, anagram değildir
  }
}

// Test örnekleri
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("dene", "deneme")); // true
