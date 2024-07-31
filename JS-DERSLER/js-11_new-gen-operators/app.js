//DESTRUCTURİNG
const product = {
  id: 12345,
  brand: "Samsung",
  type: "Smart Phone",
  price: 2000,
};
//nokta notasyonu
// console.log(product.id);

// //[] squer braket notasyonu
// console.log(product["brand"]);

// let ids = product.id; // stackte duruyor. Yapılan değişiklik objeyi etkilemez

// ids = "67890";

// console.log(product.id);

let brands = product["brand"];
const product2 = {
  id: 647890,
  brand: "Apple",
  type: "Smart Phone",
  price: 3000,
};

console.log(product2);
//
//objeler alfabetik sıralıyor buyuzden sıralama onemlı değil destruct ederken
//object Destructuring

// const { brand, price, type, id } = product2;
// console.log(id, price, brand, type);
// olmayını undefined döner
const { brand, ids } = product2;
console.log(brand, ids);

// {
//   const { id, brand } = product;
//   console.log(id, brand);
// }
//
//Var Sayılan Değer(dest yaparken nesnede olmayan bir özelliği varsayılan değer olarak yapılabilirz)
const person = {
  personName: "Jean-Jacques",
  surname: "Rousseau",
};
let { personName, surname, age = 66 } = person;
console.log(personName, surname, age);
age = 56;
console.log(personName, surname, age);

const person2 = {
  personName: "John",
  surname: "Doe",
};

let { personName: userName, surname: userSurname, Userage = 66 } = person2;
console.log(person2);

//

//Fonksiyonlar obje destructuring

const person3 = {
  personName: "Jane",
  surname: "Doe",
};
const printPerson = (insan) => {
  console.log(`Name: ${insan.personName} Surname: ${insan.surname}`);
};
printPerson(person2);
printPerson(person3);

const printPerson2 = (person) => {
  const { personName, surname } = person;
  console.log(`Name: ${personName} Surname: ${surname}`);
};

printPerson2(person3);
printPerson2(person2);

//
//
//3.yontem. HAVADA DESTRUCTURİNG

const printPerson3 = ({ personName, surname }) => {
  console.log(`Name: ${personName} Surname: ${surname}`);
};

printPerson3(person3);
printPerson3(person2);
//
//
const objectReturn = function () {
  return {
    name: "Mark",
    surName: "brown",
    location: "Turkey",
  };
};
//console.log(objectReturn());

// let { surName, name } = objectReturn(); // functionun dondurduğu obje doğrudan destruct edilebilir
// console.log(name, surName);
//
//
const user = {
  name: "Mark",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Istanbul",
    zip: "12345",
  },
};

console.log(user.address.city);

// const { name1, address } = user;
// console.log(name1, address);// adres obje olarak döner

// const {
//   name,
//   address: { city, zip, street },
// } = user;
// console.log(city);
// console.log(city, zip, street);

//
//
//
const company = {
  name: "Tech Corp",
  location: {
    country: "USA",
    address: {
      street: "456 Tech Road",
      city: "Innovation",
      zip: "67890",
    },
  },
  employees: [
    { name: "John", position: "Developer" },
    { name: "Jane", position: "Designer" },
  ],
};

//ATAMA
company.location.country = "England";
const {
  location: {
    country,
    address: { street: companystreet },
  },
} = company;
console.log(companystreet, country);
//
console.log(companystreet);
console.log(companystreet, country);
//
//
//

// objeler alfabetık sırakal gıtıgı ıcın yazım sırası onemlı değil . ama arraylerde onemlıdır
const num = [1, 2, 3, 4, 5];

// let [first, third, second] = num;
// console.log(first);
// console.log(second);
// console.log(third);
let [first, , , , five] = num;
console.log(five);
//
//
//Nested Arraylerde destructuring
const nestedArray = [1, 2, [3, 4], 5];

let [, , nested, besinci] = nestedArray;

console.log(nested); // [3, 4]

console.log(besinci); // 5

let [bir, iki, [uc], bes] = nestedArray;
console.log(uc);

console.log(bir, iki, uc, bes);
//*
//*
//*
//*Rest (...) operatörü

const araclar = ["Kamyon", "Tır", "Kamyonet", "Araba", "ATV", "Minibüs"];

const [arac1, arac2, , ...binek] = araclar;

console.log(arac1);
console.log(arac2);
console.log(binek);
//
//
//Objelerde rest kullanımı
//

// const person5 = {
//   ad: "Hazel",
//   soyad: "Nut",
//   is: "team lead",
//   yas: 40,
// };
// const { soyad, ad, ...geriKalanlar } = person5;
// console.log(soyad, ad, geriKalanlar); //Nut Hazel {is: 'team lead', yas: 40}
// //
// //
//
//Fonksiyonlarda rest operatörü

const topla = (a, b) => a + b;
console.log(topla(1, 2, 3));

const toplam = (...sayilar) => {
  //   console.log(sayilar);
  return sayilar.reduce((a, b) => a + b);
};
console.log(toplam(1, 2, 3, 4, 5, 6));
console.log(toplam(50, 51));

//
//
//
// Spread(...) operatörü (yaymak, dağıtmak, açmak)

const person5 = {
  ad: "fulya",
  soyad: "türe",
  is: "full stack developer",
  yas: "30",
};
const person6 = person5;
//adres atamasıdır.değer ataması değildir. bu gölge kopyalamadır
person5.yas = 41;
console.log(person5.yas);
console.log(person6.yas);

//
//
//
//gölge kopyalama olmasını istemiyorsak.(DERİN COPYALAMA)
const person7 = { ...person5 };

console.log(person7);

person5.yas += 1;
console.log(person5.yas); //42
console.log(person7.yas); //41
console.log(person6.yas); //42
//
//
//
//Arraylerde Spread Operatörü
//
const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"];
const karaAracları = ["araba", "bisiklet", "marti"];

const tumAraclar = [ucanAraclar, karaAracları]; //nested bir array olusur  [Array(4), Array(3)]
console.log(tumAraclar);

const tumAraclar2 = [...karaAracları, ...ucanAraclar];

console.log(tumAraclar2); //['araba', 'bisiklet', 'marti', 'helicopter', 'drone', 'ucak', 'fuze']

console.log(...karaAracları); //araba bisiklet marti
