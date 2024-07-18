//* ------------------------------------------------------------- */
//*                              OBJECTS                         */
//* ------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ancak daha karmaşık veriler için Object(nesne) kullanılır

//! Objectlerde key-value ( Property-value) yapisi kullanilir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

//? Array'lerde ilişkisel veriler
//* Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//
//

const ogrIsim = ["ahmet", "mehmet", "saffet"];
const ogrSoyisim = ["yılmaz", "can", "baki"];
console.log(`${ogrIsim} - ${ogrSoyisim}`);

//
//
//***************Object Oluşma Yöntemleri */
//
//
//  3 farklı yöntem ile Object Oluşturulabilir
//***************1. Object() class'ından türetme

const car = new Object();

car.brand = "BMW";
car.model = 1990;
car.price = 10000;
console.log(car);
console.log(car.model);

//
//
//
//***************2. Constructor metodu ile obj. oluşturma
//!OPP(OBJECRT ORİENTED PROGRAMMİNG)

function PersonelList(id, ad, maas) {
  this.id = id;
  this.ad = ad;
}
console.log(this);
const personel1 = new PersonelList(101, "Ali");
const personel2 = new PersonelList(102, "Veli");
console.log(personel1);
console.log(personel2);

//
//
//
//***************3. Object Literal(en kullanılan ve en cok tercıh edılen)

let house = {}; // boş bir object tanımlama
house.room = 4;
console.log(house);

let personel = {
  name: "Fatma",
  lastName: "Kara",
  birth: 1990,
  isMarried: true,
  experiences: ["tester", "developer", "devops"],
  adres: { city: "izmir", street: "begonya", no: 5 },
  calculateAge: function () {
    return new Date().getFullYear() - this.birth;
  },
  selam: () => {
    return "Merhaba";
  },
  arrowFunction: () => {
    return this.isMarried;
  },
};

//* ------- OKUMA/ERİŞME ----------
//? 1) . (dot) notasyonu ile erişim
console.log(personel.name);
console.log(personel.lastName);
console.log(personel.birth);
console.log(personel.experiences[0]);
console.log(personel.adres.city);
console.log(personel.calculateAge());
console.log(personel.selam());
console.log(personel.arrowFunction());

//? 2) [] Square bracket ile erişim
console.log(personel["birth"]);
console.log(personel["adres"]);
console.log(personel["adres"]["city"]);

//? yeni bir özellik (property) ekleme
personel.phone = "555-55-55";
personel["nick"] = "sopalı";
console.log(personel);

//? mevcut özelliği güncelleme
personel.name = "Ayşe";
personel["lastName"] = "Yılmaz";
console.log(personel);
console.clear(); // consol temizleme

//? Bir objeyi kopyalama
const elemanListesi = personel;
console.log("personel listesi", personel);
console.log("eleman listesi", elemanListesi);

personel.name = "Leyla";
console.log("*** kopyalamadan sonra ****");
console.log("personel listesi", personel);
console.log("eleman listesi", elemanListesi);

//! Shallow copying (sığ) koplayama
//! Yukarıdaki şekilde yapıldığında değişimlerden etkilenir

//? ----------------------------------------------- */
//? Kopyasının etkilenmesini istemiyorsak - Deep Copy yöntemi kullanılır.
let deepCopyPersonel = JSON.parse(JSON.stringify(personel));
console.log("deepCopy", deepCopyPersonel);
personel.lastName = "Mecnun";
console.log("personel listesi", personel);
console.log("deepCopy", deepCopyPersonel);

//* ------------------------------------------------------ */
//*                     OBJECT METHODS
//* ------------------------------------------------------ */
//? İçiçe (nested) Object kullanımı

let employeeList = {
  person1: {
    name: "Abdulkadir",
    lastName: "baki",
    dateOfBirth: 1980,
    salary: 20000,
    job: "developer",
  },
  person2: {
    name: "elif",
    lastName: "akalın",
    dateOfBirth: 1990,
    salary: 20000,
    job: "developer",
  },
  person3: {
    name: "esra",
    lastName: "bilgin",
    dateOfBirth: 1985,
    salary: 21000,
    job: "devops",
  },
};

console.log(employeeList.person1);
console.log(employeeList.person1.name);
console.log(employeeList["person2"]);
console.log(employeeList["person2"]["lastName"]);

//* -------------------------------------------------------- */
//*                   FOR - OF -IN YAPISI                    */
//* -------------------------------------------------------- */
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

console.log(people);
people.forEach((kisi) => console.log(kisi.surname));
//değerleri bir dizide toplamak istiyorsan return yapan map metodu kullanılabilir
newArr = people.map((kisi) => console.log(kisi.age + 1));
//
//
people.map((kisi, index, array) => (array[index].age += 1));
console.log(people);
