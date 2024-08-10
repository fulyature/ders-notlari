const character =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const arrow = (num) => {
  id = "";
  for (i = 1; i <= num; i++) {
    let index = Math.floor(Math.random() * character.length);
    id += character[index];
  }
  return id;
};
// console.log(arrow(10));
//
function hexsArrays(num) {
  hexArr = [];
  const hex = () => {
    const hexChars = "0123456789ABCDEF";
    let hexNumber = "#";

    for (i = 1; i <= 6; i++) {
      const random = Math.floor(Math.random() * hexChars.length);
      hexNumber += hexChars[random];
    }
    return hexNumber;
  };
  for (let i = 0; i < num; i++) {
    hexArr.push(hex());
  }
  return hexArr;
}
console.log(hexsArrays(4));

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

function bul(sayi) {
  sayi >= 0 ? console.log("pozitif") : console.log("negatif");
}
bul(5);
//
//decleration default paremetreli
function yazdir(ad, soyad = "yılmaz") {
  console.log(`${ad} ${soyad}`);
}
yazdir("ful", "t");
//arrow
const selamla = (ad, soyad = "türe") => console.log(`${ad} ${soyad}`);
selamla("fulya", "ökd");
let users = [
  { firstName: "Susan", lastName: "Steward", age: 14 },
  { firstName: "Daniel", lastName: "Longbottom", age: 16 },
  { firstName: "Bruno", lastName: "Black", age: 56 },
  { firstName: "Jacob", lastName: "Joyo", age: 15 },
  { firstName: "Sam", lastName: "Drogo", age: 64 },
];
let singleUser = users.map((item) => {
  console.log(item);
  fullName = item.firstName + " " + item.lastName;
  return fullName;
});
console.log(singleUser);
//ismi susan olanı filtrelesim
const filter = users.filter((item) => {
  return item.firstName === "Susan";
});
console.log(filter);
//
const filterAge = users
  .filter((item) => item.firstName === "Susan")
  .map((item) => item.age);
console.log(filterAge);
//young
const young = users.filter((item) => item.age < 18);
const message = young.map((item) => {
  return `${item.firstName} ehliyet alamaz`;
});
console.log(message);
//find
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.
const sam = users.find((item) => item.firstName === "Sam");
console.log(sam);
//
const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing",
  },
};

const { firstName, hobbies } = Susan;
console.log(firstName, hobbies);
//{hobby1: 'singing', hobby2: 'dancing'}
const {
  hobbies: { hobby1, hobby2 },
} = Susan;
console.log(hobby1);
//singing
