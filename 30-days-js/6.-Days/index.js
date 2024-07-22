// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// //
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// //
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
//
// let i = 10;
// for (i; i >= 0; i--) {
//   console.log(i);
// }

//
// //
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// //
// //
//
//
// let str = "";
// for (let i = 1; i <= 7; i++) {
//   str += "#";
//   console.log(str);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`${i}*${i} = ${i * i}`);
// }

// console.log("i i^2 i^3");
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

//
//
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//
// for (let i = 2; i <= 100; i++) {
//   if (i === 2 || i === 3 || i === 5 || i === 7) {
//     console.log(i);
//   } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//     console.log(i);
//   }
// }
// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// let i = 0;
// let sum = 0;
// for (i; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// function random(length) {
//   // Karakter setimizi burada tanımlıyoruz.
//   var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   // Rastgele karakter seçimi
//   var str = "";
//   for (let i = 0; i < length; i++) {
//     str += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return str;
// }
// console.log(random(4));
// console.log(random(15));
// console.log(random(20));

// function hexNum(length) {
//   let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let hex = "";
//   for (let i = 0; i < length; i++) {
//     hex += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return hex;
// }

// console.log(`#${hexNum(8)}`);

//
//
function rgbfks() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(rgbfks());
// //
//
const arr = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
//
//
//4. soru
// Rastgele bir uzunluk belirleyin (1 ile 11 arasında)
const rasgeleLength = Math.floor(Math.random() * arr.length) + 1;

// Rastgele yeni bir dizi oluşturun
const rasgeleArr = [];
for (let i = 0; i < rasgeleLength; i++) {
  // Diziden rastgele bir eleman seçin
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];

  // Aynı elemanın tekrar eklenmesini önlemek için kontrol edin
  if (!rasgeleArr.includes(randomElement)) {
    rasgeleArr.push(randomElement);
  } else {
    i--; // Aynı eleman seçildiğinde döngüyü tekrar ettirin
  }
}

console.log(rasgeleArr);
//
//5.soru Yukarıdaki array'i kullanarak ülkelerin harf uzunluklarını içeren bir dizi olşturun'.
//
const newArr = [];
for (i of arr) {
  newArr.push(i.length);
}
console.log(newArr);
//
//6. soru   Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun:
//
const newArr1 = [];
for (const i of arr) {
  const newArr2 = [];
  newArr2.push(i.charAt(0) + i.slice(1).toLowerCase()); // İlk harfi büyük, diğerlerini küçük yapın
  newArr2.push(i.slice(0, 3)); // İlk üç harfi alın
  newArr2.push(i.length); // Uzunluğu ekleyin
  newArr1.push(newArr2); // newArr2'yi newArr1'e ekleyin
}

console.log(newArr1);
//
//2.yol
//map yapılan işlemleri bir diziye atıp, dizi döndürür
const transformedArray = arr.map((country) => {
  const countryName = country.charAt(0) + country.slice(1).toLowerCase();
  console.log(countryName);
  const countryAbbreviation = country.slice(0, 3);
  console.log(countryAbbreviation);
  const countryLength = country.length;

  return [countryName, countryAbbreviation, countryLength];
});

console.log(transformedArray);
//
//7.soru   Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "land" içeren ülkeler varsa bunu dizi halinde yazdırın.
//
const includeLand = arr.filter((item) => item.toLowerCase().includes("land"));

console.log(includeLand);
//
//8. soru   Yukarıdaki ülkeler dizisinde "ia" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "ia" içeren ülkeler varsa bunu dizi halinde yazdırın..
//
const iaInclude = arr.filter((item) => item.toLocaleLowerCase().includes("ia"));
console.log(iaInclude);
//
//9.soru    Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun
//
let longest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}
console.log(longest);
//
//
//2.yol
let longest1 = [];
for (i of arr) {
  if (i.length > longest1.length) {
    longest1 = i;
  }
}
console.log(longest1);
//
//10.soru    Yukarıdaki ülkeler dizisini kullanarak, yalnızca 5 karakter içeren ülkeyi bulun.
//
const fiveLetter = arr.filter((item) => {
  if (item.length === 5) {
    return item;
  }
});
console.log(fiveLetter);
//
//
//
//**3. SEVİYE */
//
//
//1.soru
//sığ kopyalama
const copiedArr = JSON.parse(JSON.stringify(arr));
console.log(copiedArr);
//
//2. soru Diziler değişebilir. Dizinin orjinalini değişirmeden bir kopyasını oluşturun. Oluşturduğunuz diziyi alfabetik olarak sıralayın ve sortedCountries dizisine atayın
const arrCopy = [...arr];

// 2. Kopyalanan diziyi alfabetik olarak sıralayın
const sortedCountries = arrCopy.sort((a, b) => a.localeCompare(b));

// Sonucu kontrol edin
console.log(sortedCountries);
//
//
//3.webTechs dzisini ve mernStack dizisini sıralayın
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(webTechs.sort());
console.log(mernStack.sort());
//
//
//6.countries array inde 4 karakterli ülkeleri yazdırın
const yazdir = webTechs.filter((item) => item.length === 4);

console.log(yazdir);
//
//
//7.inde iki veya daha fazla kelime içieren ülkeleri farklı bir diziye atayın
const yazdir2 = webTechs.filter((item) => item.length >= 4);
console.log(yazdir2);
//
//
//7.countries array i ters çevirin ve ülkelerin tüm harflerini büyük hale gertirin
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
const reversedCountries = countries.reverse();
console.log(reversedCountries);
const upper = reversedCountries.map((item) => item.toUpperCase());
console.log(upper);
//
//
//2.yol
const reversed = [];
for (let i = countries.length - 1; i >= 0; i--) {
  reversed.push(countries[i]);
}

console.log(reversed);
const toUpper = [];
for (i of reversed) {
  toUpper.push(i.toUpperCase());
}
console.log(toUpper);
