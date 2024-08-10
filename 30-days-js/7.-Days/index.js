function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//fonksiyon çağırımı
console.log(sumArrayValues(numbers));
//
//
//
// function sumAllNums(...arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum;
// }

// console.log(sumAllNums(1, 2, 3, 4)); // 10
// console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
// //
// //
const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
//
// arguments nesnesine erişmemize bir örnek
const sumAllNums = (...args) => {
  // console.log(arguments), arguments nesnesi bulunamadı
  // bunun yerine spread operator (...) ve parametre adı kullanalım
  console.log(args);
};

sumAllNums(1, 2, 3, 4);
// [1, 2, 3, 4]
//
//
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(greetings());
console.log(greetings("Asabeneh"));
//
//
const greetings1 = (name = "Peter") => {
  let message = name + ", welcome to 30 Days Of JavaScript!";
  return message;
};

console.log(greetings1());
console.log(greetings1("Asabeneh"));
//
//
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear;
  return age;
}

console.log("Age: ", calculateAge());
//
//
//
// LEVE1
//1.
function fullName(param, param2) {
  let fullname = `${param} ${param2}`;
  return fullname;
}
console.log(fullName("fulya", "Türe"));
//
function fullName(param, param2) {
  return `${param} ${param2}`;
}
console.log(fullName("fulya", "Türe"));
//
//
//3. soru Declare a function addNumbers and it takes two two parameters and it returns sum.

function topla(a, b) {
  return a + b;
}
console.log(topla(5, 4));
//
//
//4.soru. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(10, 5));
//
//
//5.soru A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = function (length, width) {
  return 2 * (length + width);
};
console.log(perimeterOfRectangle(50, 10));
//
//
//6.soru A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = function (length, width, height) {
  return length * width * height;
};
console.log(volumeOfRectPrism(5, 5, 3));
//
//
//7. soru Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = function (r) {
  return (Math.PI * r * r).toFixed(3);
};
console.log(areaOfCircle(3));
//
//
//8. soru Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = function (r) {
  return (Math.PI * 2 * r).toFixed(3);
};
console.log(circumOfCircle(3));
//
//
//9. soru Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = function (mass, volume) {
  return mass / volume;
};
console.log(density(9, 3));
//
//
//10. soru Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(yol, zaman) {
  return yol / zaman;
}
console.log(speed(200, 2));
//
//
//11. soru Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function agırlık(kutle, yercekimi) {
  return kutle * yercekimi;
}
console.log(agırlık(5, 3));
//
//
//12. soru Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function toFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
console.log(toFahrenheit(20));
//
//
//13. soru  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

function BMICount(height, weight) {
  // height'i metreye çevir
  const heightInMeters = height / 100;
  // BMI hesaplama formülü
  const BMI = weight / (heightInMeters * heightInMeters);
  if (BMI < 18.5) {
    return `düşük kilolu`;
  } else if (BMI < 24.9) {
    return `Normal Ağırlık`;
  } else if (BMI < 30) {
    return `Fazla kilolu`;
  } else {
    return `Obez`;
  }
}
console.log(BMICount(165, 72));
//
//
//14. soru Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const ilkBahar = ["mart", "nisan", "mayıs"];
const sonBahar = ["eylül", "ekim", "kasım"];
const yaz = ["haziran", "temmuz", "ağustos"];
const kıs = ["aralık", "ocak", "şubat"];
function checkSeason(par) {
  for (i of ilkBahar) {
    if (par === i) {
      return `${i} = ilkbahar mevsimi`;
    }
  }
  for (i of sonBahar) {
    if (par === i) {
      return `${i} = sonBahar mevsimi`;
    }
  }
  for (i of yaz) {
    if (par === i) {
      return `${i} = yaz mevsimi`;
    }
  }
  for (i of kıs) {
    if (par === i) {
      return `${i} = kıs mevsimi`;
    }
  }
}
console.log(checkSeason("mart"));
console.log(checkSeason("eylül"));
//
//
//2.yol
// const seasons = {
//   ilkBahar: ["mart", "nisan", "mayıs"],
//   sonBahar: ["eylül", "ekim", "kasım"],
//   yaz: ["haziran", "temmuz", "ağustos"],
//   kıs: ["aralık", "ocak", "şubat"],
// };

// function checkSeason(par) {
//   for (const season in seasons) {
//     if (seasons[season].includes(par)) {
//       switch (season) {
//         case "ilkBahar":
//           return `${par} = ilkbahar mevsimi`;
//         case "sonBahar":
//           return `${par} = sonbahar mevsimi`;
//         case "yaz":
//           return `${par} = yaz mevsimi`;
//         case "kıs":
//           return `${par} = kış mevsimi`;
//       }
//     }
//   }
//   return `${par} = geçerli bir ay değil`;
// }

// console.log(checkSeason("mart")); // mart = ilkbahar mevsimi
// console.log(checkSeason("eylül")); // eylül = sonbahar mevsimi
// console.log(checkSeason("haziran")); // haziran = yaz mevsimi
// console.log(checkSeason("aralık")); // aralık = kış mevsimi
// console.log(checkSeason("ocak")); // ocak = kış mevsimi
// console.log(checkSeason("abc")); // abc = geçerli bir ay değil
// //
// //
//15. soru Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else return c;
}
console.log(findMax(-9, -1, 7));
//
//
// 2. yol
function findMax1(a, b, c) {
  return a > b && a > c
    ? `en buyuk ${a}`
    : b > a && b > c
    ? `en buyuk ${b}`
    : `en buyuk ${c}`;
}

console.log(findMax1(-9, -1, 7));
//
//
//
//***********LEVEL 2 */
//
//
//2.soru Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//
function solveQuadEquation(a = 1, b = 0, c = 0) {
  const discriminant = b * b - 4 * a * c;
  const result = {};

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result.roots = [root1, root2];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    result.roots = [root];
  } else {
    result.message = "No real roots";
  }

  return result;
}

console.log(solveQuadEquation()); // { roots: [0] }
console.log(solveQuadEquation(1, 4, 4)); // { roots: [-2] }
console.log(solveQuadEquation(1, -1, -2)); // { roots: [2, -1] }
console.log(solveQuadEquation(1, 7, 12)); // { roots: [-3, -4] }
console.log(solveQuadEquation(1, 0, -4)); // { roots: [2, -2] }
console.log(solveQuadEquation(1, -1, 0)); // { roots: [1, 0] }

//
//
//
//3.soru Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(item) {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }
}

const myArray = [1, 2, 3, 4];

printArray(myArray); // 1 2 3 4
//
//
//
//4. soru Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

//showDateTime()
//08/01/2020 04:08
function showDateTime() {
  const now = new Date();
  console.log(now);

  const day = ("0" + now.getDate()).slice(-2);

  console.log(day);

  const month = ("0" + now.getMonth()).slice(-2);
  console.log(month);
  const year = now.getFullYear();
  console.log(year);

  const hour = now.getHours();
  console.log(hour);
  const min = now.getMinutes();
  console.log(min);
  const format = `${day}/${month}/${year} ${hour}:${min} `;
  console.log(format);
}
showDateTime();
//
//
//
//5.soru Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
  const x = b;
  const y = a;
  console.log(`x=>${y} , y=>${x}`);
}
swapValues(1, 2);
//
//
//
//6.soru Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(item) {
  const bos = [];
  for (let i = item.length - 1; i >= 0; i--) {
    bos.push(item[i]);
  }
  return bos;
}
dizi = ["elma", "armut", "muz"];
console.log(reverseArray(dizi));
//
//
//
//7. soru Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(item) {
  const bos = [];
  for (let i = 0; i <= item.length - 1; i++) {
    bos.push(item[i].toUpperCase());
  }
  return bos;
}
console.log(capitalizeArray(dizi));
//
//
//8. soru Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

let items = [];
function addItem(item) {
  items.push(item);
  return items;
}
console.log(addItem("kiraz"));
console.log(addItem("çilek"));
//
//
let arrow = (item) => {
  items.push(item);
  return items;
};
console.log(arrow("süt"));
//
//
//9.soru Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const dizi1 = ["fulya", "yunus", "zeynep"];
function removeItem(index) {
  if (index >= 0 && index < dizi1.length) {
    dizi1.splice(index, 1);
  } else {
    console.log("Geçersiz indeks");
  }
  return dizi1;
}
console.log(removeItem(1));
// console.log(removeItem(0));
// console.log(removeItem(5));
//
//
//10. soru Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    result = sum += i;
  }
  return result;
}
console.log(sumOfNumbers(1, 7));
//
//
//11. soru Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(1, 3));
//
//
//12. soru Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(1, 6));
//
//
//13. soru Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(a, b) {
  let counteven = 0;
  let countodd = 0;

  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      counteven++;
    }
    if (i % 2 !== 0) {
      countodd++;
    }
  }
  console.log(`The number of odss are ${countodd}`);
  console.log(`The number of even are ${counteven}`);
  return counteven, countodd;
}
evensAndOdds(1, 7);
//
//
//14. soru Write a function which takes any number of arguments and return the sum of the arguments

function sum(...sayilar) {
  return sayilar.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 10));
//
//2. yol
function sum2(...sayilar) {
  let toplam = 0;
  for (let i of sayilar) {
    toplam += i;
  }
  return toplam;
}
console.log(sum2(1, 3, 6));
//
//
//15. soru Writ a function which generates a randomUserIp.
function randomUserIp() {
  return Math.trunc(Math.random() * 6);
}
console.log(randomUserIp());
//
//
//17. soru Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () => {
  const hexChars = "0123456789ABCDEF";
  let hexNumber = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexNumber += hexChars[randomIndex];
  }

  return hexNumber;
};

console.log(randomHexaNumberGenerator());
//
//18.soru Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const character =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const userIdGenerator = () => {
  let id = "";
  for (let i = 0; i < 7; i++) {
    const randomindex = Math.floor(Math.random() * character.length);
    id += character[randomindex];
  }
  return id;
};
console.log(userIdGenerator());
//
//
//************LEVEL 3 */
//
//1. soru Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// function userIdGeneratedByUser() {
//   const num = +prompt("karakter sayısını girin");
//   const adet = +prompt("kaç adet oluşturulsun");
//   let ids = "";
//   for (let j = 0; j < adet; j++) {
//     let id = "";
//     for (let i = 0; i < num; i++) {
//       const randomindex = Math.floor(Math.random() * adet);
//       id += character[randomindex];
//     }
//     ids += id + "\n";
//   }
//   return ids;
// }
// console.log(userIdGeneratedByUser());
//
//
//2. soru Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());
//
//
//2. yol
function rgbColorGenerator() {
  const randomValue = () => Math.floor(Math.random() * 256);
  return `rgb(${randomValue()},${randomValue()},${randomValue()})`;
}

console.log(rgbColorGenerator());
//
//
//3.yol
function rgbColorGenerator() {
  const randomValue = () => Math.floor(Math.random() * 256);
  const rgbMatrix = [randomValue(), randomValue(), randomValue()];
  return `rgb(${rgbMatrix.join(",")})`;
}

console.log(rgbColorGenerator());
//

//3. soru Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num) {
  hexArr = [];

  const randomHexaNumberGenerator = () => {
    const hexChars = "0123456789ABCDEF";
    let hexNumber = "#";

    for (let i = 0; i <= 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      hexNumber += hexChars[randomIndex];
    }

    return hexNumber;
  };

  for (let i = 0; i < num; i++) {
    hexArr.push(randomHexaNumberGenerator());
  }
  return hexArr;
}
console.log(arrayOfHexaColors(5));
//
//
//4. soru Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(num) {
  rgbArr = [];
  const rgbColor = () => {
    const random = () => Math.trunc(Math.random() * 256);

    return `rgb(${random()} ${random()} ${random()})`;
  };

  for (let i = 0; i < num; i++) {
    rgbArr.push(rgbColor());
  }
  return rgbArr;
}
console.log(arrayOfRgbColors(9));
//
//
//5. soru Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.s
//
///
//
//7. soru Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(a, b) {
  function hexa() {
    const hexChars = "0123456789ABCDEF";
    let hexNumber = "#";
    for (let i = 1; i <= 6; i++) {
      const random = Math.floor(Math.random() * hexChars.length);
      hexNumber += hexChars[random];
    }
    return hexNumber;
  }

  function rgb() {
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);

    return `rgb(${r}.${g},${b})`;
  }

  const colors = [];
  for (let i = 0; i < b; i++) {
    if (a == "hexa") {
      colors.push(hexa());
    } else if (a == "rgb") {
      colors.push(rgb());
    }
  }
  return colors;
}

console.log(generateColors("hexa", 7));
console.log(generateColors("rgb", 2));
