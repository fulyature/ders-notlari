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
