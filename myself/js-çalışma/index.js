//**O-100 arasında n kadar rasgele sayı üretmek */
//
//
//**round ile yuvarlama yapıyorsan 99,5 i 100 e yuvarlar. yani 100 değeri gelir.virgülden sonra 5 ve üzerini üste yuvarlar */
// let number = +prompt("kaç tane rasgele sayı üretmek istiyorsun");
// for (let i = 0; i <= number; i++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   console.log(`${i}. sayı: ${rasgeleSayi}`);
// }
//
//
//**Girilen bir sayının asal olup olmadığını for döngüsü ile yazın */
//

// let sayi = +prompt("bir sayı girin");
// let sonuc = true;
// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     sonuc = false;
//     break;
//   }
// }
// if (sonuc) {
//   console.log(`${sayi} asaldır`);
// } else {
//   console.log(`${sayi} asal değildir`);
// }
//
// 2. yol
// let sayi = +prompt("bir sayı girin");
// let counter = 0;
// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     counter++;

//     break;
//   }
// }

// console.log(counter > 0 ? "asal değil" : "asal");
//
//**Kullanıcıcan 0-100arası not isteyen döngü do-while ile çöz */
//
//
// let not = +prompt("Notunuzu giriniz");
// while (not < 0 || not > 100) {
//   console.log("notunuz 0 dan kucuk 100 den buyuk olamaz");
//   not = +prompt("doğru Notunuzu giriniz");
// }
// console.log(`notunuz: ${not}`);
//
//
//**konsoldan girilen sayı tek veya çift old. hesapla */
//
//
// function hesapla(num) {
//
//   if (num % 2 === 0) {
//     return "çift";
//   } else return "tek";
// }
// const sayi = prompt("bir sayı girin");
// console.log(hesapla(sayi));
//
//
// function hesapla(num) {
//   let result;
//   if (num % 2 === 0) {
//     result = "çift";
//   } else result = "tek";
//   return result;
// }
// const sayi = prompt("bir sayı girin");
// console.log(hesapla(sayi));
//
//
// function hesapla(sayi) {
//   return sayi % 2 === 0 ? "çift " : "tek";
// }
// const sayi = prompt("bir sayı girin");
// console.log(hesapla(sayi));
//
//
// const oddEven = function (num) {
//   return num % 2 === 0 ? "even" : "odd";
// };
// console.log(oddEven(6));
//
//
//**Arorw fks  ile  doğum tarıhını paremetre olarak alan ve ana programa yası hesaplayıp donduren*/
//
//
// const yasHesapla = (dYıl) => {
//   sonuc = new Date().getFullYear() - dYıl;
//   return sonuc;
// };
// let abc = +prompt("doğum tarıhını girin");
// console.log(`yaşınız ${yasHesapla(abc)}`);
//
//
// const yasHesapla = (dYıl) => new Date().getFullYear() - dYıl;

// let abc = +prompt("doğum tarıhını girin");
// console.log(`yaşınız ${yasHesapla(abc)}`);
//
//
//************************Silindirin hacmi bul */
//
//
// const hacim = (r, h) => {
//   const sonuc = 2 * Math.PI * r ** 2 * h;
//   return sonuc;
// };
// console.log(`hacim: ${hacim(1, 1).toFixed(3)}`);
//
//
//*********************Hesap makinesi örneği */
//
//
// const add = (a, b) => a + b;
// const cıkar = (a, b) => a - b;
// const bol = (a, b) => a / b;
// const carp = (a, b) => a * b;

// const dortIslem = (n1, n2, operator) => {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = add(n1, n2);
//       break;
//     case "-":
//       result = cıkar(n1, n2);
//       break;
//     case "*":
//     case "x":
//       result = carp(n1, n2);
//       break;
//     case "/":
//       result = bol(n1, n2);
//       break;
//     default:
//       alert("yanlıs opt.");
//       result = "error";
//       break;
//   }
//   return result;
// };

// const x = +prompt("first number gir");
// const y = +prompt("second number gir");
// const operator = prompt("operator gir");
// console.log(
//   `giriln ilk sayı:${x},girilen ikinci ${y} sonuc= ${dortIslem(
//     x,
//     y,
//     operator
//   )} `
// );
//
//
//***************faktöriel*********/
//
//
// const fakto = (n) => {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result = result * i;
//   }
//   return result;
// };

// const number = +prompt("sayıyı gırınız");

// if (number <= 0){
//   console.log("0 dan büyük sayı giriniz");
// }else console.log(`girilen sayının faktörieli = ${fakto(number)}`);
//
//
//
//
//
//***************faktöriel*********/
//
//
// const fakto = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return (n *= fakto(n - 1));
//   }
// };
// const number = +prompt("sayıyı gırınız");

// if (number <= 0) {
//   console.log("0 dan büyük sayı giriniz");
// } else console.log(`girilen sayının faktörieli = ${fakto(number)}`);
//
//
//**RECURSİVE */
//Öz yenileme, kendi kendini çağıran fks dir
//
//
//**örnek:tavlo zarı fks */
//
//
//
// function zar() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// zar();
//
//
//**2 zar atılacak, sonu.ları 2-3, 3-5 gibi sergilesin. */
//**her zaman solda küçük olan olacak */
//**sonuc esşit gelirse. consolda tebrikler 4-4 attınız yazsın */
//
//
// const zar = () => {
//   const zarAt = () => Math.floor(Math.random() * 6) + 1;
//   let zar1 = zarAt();
//   let zar2 = zarAt();
//   if (zar1 === zar2) {
//     console.log(`${zar1}-${zar2} şeklinde attınız`);
//   } else {
//     zar1 = zar2 ? console.log(`${zar1}=${zar2} kazandınız..`):
//     (zar1 < zar2
//       ? console.log(`${zar1},${zar2}  `)
//       : zar1 > zar2 ? console.log(`${zar2},${zar1}`))
//   }
// };

// zar();
//
//
//**Artık yıl hesapla */
//
//
//**Çİftlikteki hayvan sayılarını parametre alan ve ayak sayılarını. toplamı hesapla */
// tavuk=2, antilop:4 , koyun:4, ördek:2
// const ayakHesapla = (tavuk, antilop, koyun, ördek) => {
//   let toplam = (tavuk + ördek) * 2 + (antilop + koyun) * 4;
//   console.log(toplam);
// };
// ayakHesapla(5, 3, 8, 12);
//
//
//**Kelime ters çevir */

//
//

// function tersCevir(kelime) {
//   let tersKelime = "";
//   for (let i = kelime.length - 1; i >= 0; i--) {
//     tersKelime += kelime[i];
//   }
//   return tersKelime;
// }
// tersCevir("fulya");
//
//
// function tersYaz(abc) {
//   let result = "";

//   for (let i = abc.length - 1; i >= 0; i--) {
//     result += abc[i];
//   }

//   return result;
// }

// console.log(tersYaz("fulya"));
//
//
//**Polindrom Sayı MADAM,, ANA */
//
//
// const polindromKelime = (kelime, tersCevir) =>
//   tersCevir(kelime) === kelime
//     ? console.log("polindrom")
//     : console.log("polindrom değildir");
// polindromKelime("madam", tersCevir);
// polindromKelime("fulya", tersCevir);
//
//
//
//
//
//TODO:
//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
//
//
const ogrenciler = ["Zeynep", "Fulya", "Yunus", "Zeynep", "Begüm"];
function search(ad) {
  let adet = 0;
  for (let i of ogrenciler) {
    if (ad === i) {
      adet++;
    }
  }
  return adet > 0
    ? console.log(`${ad} ${adet} tane bulundu`)
    : console.log(`${ad} bulunamadı`);
}
search("Zeynep");
//
//
//

const newArr = ogrenciler.map((name) => name.toLocaleUpperCase());
console.log(newArr);
//
//
////?-------------- ÖRNEK -------------------
//? macBookTL dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const macBookTL = [90000, 75000, 60000, 40000, 30000];

const euro = 36.29;
const dolar = 33.06;

const macBookEuro = macBookTL.map((fiyat) => Math.trunc(fiyat / euro));
console.log(macBookEuro);

const macBookDolar = macBookTL.map((fiyat) => Math.trunc(fiyat / dolar));
console.log(macBookDolar);
//
//
//
//*            FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? maasi 50000 den büyük olanları yeni bir dizide toplayınız
const maaslar = [90000, 75000, 60000, 40000, 30000];
const yeniDizi = maaslar.filter((maas) => maas >= 50000);
console.log(yeniDizi);
//
//? ORNEK: maasi 50000'den az olanları tespit edip %20 zam yapalım ve bunları yeni bir dizide toplayalım (orjinal diziyi degistirmeden)
const zamliDizi = maaslar
  .filter((maas) => maas < 50000)
  .map((map) => map * 1.2);
console.log(zamliDizi);
//////////////////////////////////////
let top1 = (a, b) => a + b;
console.log(top1(3, 2));
let top2 = (a, b) => {
  return a + b;
};
console.log(top2(3, 2));
/////////////////////////////////////
//* =======================================
//*           REDUCE
//* =======================================

const salaries = [40000, 30000, 20000, 100000];
const toplamMaas = salaries.reduce((toplam, maas) => toplam + maas, 0);
console.log(toplamMaas);
//
//
//
//
//ÖRNEKLER
const pen = {};
pen.ink = "blue";
if (pen["ink"]) {
  console.log(`color is ${pen["ink"]}`);
} else console.log("undefineed");

const myObj = {
  course: "Clarus",
};
myObj.course = "clarısway";
console.log(myObj["course"]);
//
///
const myArr = [1, 2, 5, 6, 7, 3, 4];
const newArr1 = myArr;
myArr.sort();

const numArr = newArr1.forEach((item, index) => item);
console.log(numArr);
//
//?????????????????????????*
//

console.log("Clarusway".endsWith("way"));
console.log("hello".replace("l", "r"));
//
let myName = "Anthoney Harold";
myName = myName.slice(8);
console.log(myName);
myName.toLowerCase();
console.log(myName);
////////////////////?????
const multiply = (num1, num2) => {
  return num1 * num2;
};
const result = multiply(3, 5);
console.log(result);
//////
function message(username) {
  console.log(`hello ${username}`);
}
message(); ////hello undefined
//
const msg1 = greet();
//const msg2 = greet2();
function greet() {
  return "Hello";
}
const greet2 = function () {
  return "Helllo";
};
//
function sayHello() {
  console.log("Hello World");
}
sayHello();
let person = {
  firstName: "John",
  lastName: "Doe",
};

let hasAge = person.hasOwnProperty("age"); // false
console.log(hasAge);
//
//
//DESTRUCTURİNG
const note = {
  id: 1,
  title: "my first note",
  date: "01/02/2024",
};
const { id, title, date } = note;
console.log(id, title, date);
//
//
const note2 = {
  id: 1,
  title: "My first note",
  date: "25/04/1977",
};

// Using forEach
Object.entries(note2).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Using a for loop
for (let [key, value] of Object.entries(note2)) {
  console.log(`${key}: ${value}`);
}
//
//
const arrValue = ["My", "name", "is", "Jack"];

console.log(arrValue); // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack
//
//
// 1st
let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
[].push.apply(rivers, moreRivers);
console.log(rivers);
// 2nd
rivers.push(...moreRivers);
console.log(rivers);
//
//
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
//
//
//**OBJELER ÖRNEKLER FEYZA HOCA */
ogrenciNotlarList = [
  { name: "Mustafa", notes: [70, 90, 60] },
  { name: "Rabia", notes: [50, 70, 60] },
  { name: "Hüseyin", notes: [40, 20, 30] },
  { name: "Ahmet", notes: [80, 90, 100] },
  { name: "İbrahim", notes: [30, 40, 55] },
  { name: "Tuba", notes: [90, 100, 100] },
];
//*Her öğrencinin adını ve aldığı en yüksek notu yeni bir liste:
//**1.Yol */
// const enYuksekNotListesi = ({ name, notes }) => {
//   return {
//     ad: name,
//     enNot: Math.max(...notes),
//   };
// };

// console.log(ogrenciNotlarList.map((x) => enYuksekNotListesi(x)));
//****2.yol****/

const alınanEnYuksekNot = ogrenciNotlarList.map(({ name, notes }) => {
  return {
    name: name,
    enYuksekNot: Math.max(...notes),
  };
});
console.log(alınanEnYuksekNot);
////Not ortalama bulup yeni bir listede döndüren fks
const notOrtalaması = ogrenciNotlarList.map(({ name, notes }) => {
  return {
    name: name,
    ortalama: (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(1),
  };
});
console.log(notOrtalaması);
///
const studentList = [
  {
    id: 1,
    name: "Mustafa",
    username: "mustafa123",
    email: "mustafa@example.com",
    address: {
      street: "Karanfil Sokak",
      suite: "No: 10",
      city: "Ankara",
      zipcode: "06100",
    },
    phone: "0555-555-5555",
    website: "mustafa.org",
    school: {
      name: "Ankara Üniversitesi",
      grade: "A",
      major: "Bilgisayar Mühendisliği",
    },
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    id: 3,
    name: "Tuba",
    username: "tuba123",
    email: "tuba@example.com",
    address: {
      street: "Lale Sokak",
      suite: "No: 15",
      city: "İzmir",
      zipcode: "35000",
    },
    phone: "0555-555-5557",
    website: "tuba.org",
    school: {
      name: "Ege Üniversitesi",
      grade: "A",
      major: "Bilgisayar Bilimleri",
    },
    languages: ["JavaScript", "C++", "PHP"],
  },
  {
    id: 4,
    name: "Asım",
    username: "asim123",
    email: "asim@example.com",
    address: {
      street: "Menekşe Sokak",
      suite: "No: 20",
      city: "Antalya",
      zipcode: "07000",
    },
    phone: "0555-555-5558",
    website: "asim.org",
    school: {
      name: "Akdeniz Üniversitesi",
      grade: "A",
      major: "Bilgisayar Mühendisliği",
    },
    languages: ["JavaScript", "Go", "Kotlin"],
  },
  {
    id: 5,
    name: "Rabia",
    username: "rabia123",
    email: "rabia@example.com",
    address: {
      street: "Gül Sokak",
      suite: "No: 25",
      city: "Bursa",
      zipcode: "16000",
    },
    phone: "0555-555-5559",
    website: "rabia.org",
    school: {
      name: "Uludağ Üniversitesi",
      grade: "B",
      major: "Bilgisayar Bilimleri",
    },
    languages: ["Java", "Swift", "R"],
  },
  {
    id: 6,
    name: "Mehmet",
    username: "mehmet123",
    email: "mehmet@example.com",
    address: {
      street: "Çiçek Sokak",
      suite: "No: 30",
      city: "Ankara",
      zipcode: "06100",
    },
    phone: "0555-555-5560",
    website: "mehmet.org",
    school: {
      name: "Ankara Üniversitesi",
      grade: "B",
      major: "Yazılım Mühendisliği",
    },
    languages: ["Python", "C++", "Java"],
  },
  {
    id: 7,
    name: "İbrahim",
    username: "ibrahim123",
    email: "ibrahim@example.com",
    address: {
      street: "Akasya Sokak",
      suite: "No: 35",
      city: "İstanbul",
      zipcode: "34000",
    },
    phone: "0555-555-5561",
    website: "ibrahim.org",
    school: {
      name: "İstanbul Teknik Üniversitesi",
      grade: "A",
      major: "Bilgisayar Mühendisliği",
    },
    languages: ["JavaScript", "TypeScript", "Rust"],
  },
  {
    id: 8,
    name: "Ahmet",
    username: "ahmet123",
    email: "ahmet@example.com",
    address: {
      street: "Manolya Sokak",
      suite: "No: 40",
      city: "İzmir",
      zipcode: "35000",
    },
    phone: "0555-555-5562",
    website: "ahmet.org",
    school: {
      name: "Ege Üniversitesi",
      grade: "A",
      major: "Bilgisayar Bilimleri",
    },
    languages: ["JavaScript", "Python", "Scala"],
  },
  {
    id: 9,
    name: "Vusala",
    username: "vusala123",
    email: "vusala@example.com",
    address: {
      street: "Orkide Sokak",
      suite: "No: 45",
      city: "Antalya",
      zipcode: "07000",
    },
    phone: "0555-555-5563",
    website: "vusala.org",
    school: {
      name: "Akdeniz Üniversitesi",
      grade: "B",
      major: "Yazılım Mühendisliği",
    },
    languages: ["C#", "Java", "PHP"],
  },
];
//
// const newStudent = studentList.push({
//   id: 2,
//   name: "Hüseyin",
//   username: "huseyin321",
//   email: "huseyin@example.com",
//   address: {
//     street: "Papatya Caddesi",
//     suite: "Daire: 5",
//     city: "İstanbul",
//     zipcode: "34000",
//   },
//   phone: "0555-555-5556",
//   website: "huseyin.org",
//   school: {
//     name: "İstanbul Teknik Üniversitesi",
//     grade: "B",
//     major: "Yazılım Mühendisliği",
//   },
//   languages: ["C#", "Python", "Ruby"],
// });
// console.log(studentList);
const newStudent = {
  id: 2,
  name: "Hüseyin",
  username: "huseyin321",
  email: "huseyin@example.com",
  address: {
    street: "Papatya Caddesi",
    suite: "Daire: 5",
    city: "İstanbul",
    zipcode: "34000",
  },
  phone: "0555-555-5556",
  website: "huseyin.org",
  school: {
    name: "İstanbul Teknik Üniversitesi",
    grade: "B",
    major: "Yazılım Mühendisliği",
  },
  languages: ["C#", "Python", "Ruby"],
};
//Yeni bir liste oluşturup ekleseydik
const newStudentList = [...studentList, newStudent];
console.log(newStudentList);
console.log(studentList);
//İsim,username,telefon
///*******************
const newList1 = newStudentList.map(
  ({ name, username, email, address: { city, street } }) => ({
    name,
    username,
    email,
    city,
    street,
  })
);
console.log(newList1);
//
//yazılım muh. pazartesi arancak, bşlgisayar müh. çarşamba
const pztList = newStudentList
  .filter(({ school: { major } }) => major.startsWith("Yazılım"))
  .map(({ name, phone }) => ({ name, phone }));
//
const carsList = newStudentList
  .filter(({ school: { major } }) => major[0] === "B")
  .map(({ name, phone }) => ({ name, phone }));
console.log(carsList);
//
//
//id si tek olanlara frontend mesajı, çift olanlarada backend mesajo gönderilecek
// const reklamMetni = ({ id, name, phone }) => ({
//   name: name,
//   phone: phone,
//   mesaj:
//     id % 2 == 1
//       ? `${name} frontend eğitimim için bizi ara`
//       : `${name} backend eğitimi için bizi ara`,
// });
// const reklam = newStudentList.map((fulya) => reklamMetni(fulya));
////
//Yardımcı foks ile
const reklamMetni = ({ id, name, phone }) => {
  const metin = id % 2 === 0 ? "backend eğitimi" : "frontend eğitim";
  return {
    name: name,
    phone: phone,
    mesaj: metin,
  };
};
console.log(newStudentList.map((x) => reklamMetni(x)));
///
//
//
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];
const categoriedListe=({category,price})=>{
  const 
}