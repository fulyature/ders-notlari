console.log("hi");
let isim = "Fulya";
let str2 = `hello world, ben ${isim}`;
let str3 = `${isim} nasılsın`;
let bday = "benim dogum gunum '28 mart' ";
let bday2 = 'benim d günum "28 mart"';
let bday3 = `benim d günüm "28 mart"`;

let str5 = new String("hello worls");

console.log(typeof isim);
console.log(str2);
console.log(str3);
console.log(bday);
console.log(bday2);
console.log(bday3);
console.log(str5);
console.log(typeof str5);
console.log(isim[1]);

let tc = 123456789;
const isims = "fulya";
let cumle = `müşterinizin tcsi: ${tc} dir. adı :${isims}`;
console.log(cumle);

// stringlerin içindeki değerlere ulasılır ama değiştirlemez

//boolen true veya false içeren veri tipi

let deger = false;

let xyz = 0;
let abc = "fulya";
let def = undefined;
let sifre = 123;

if (sifre === 123) {
  console.log("şifre doğru");
} else {
  console.log("yanlış");
}

if (deger) {
  console.log("calıstı");
} else {
  console.log("çalışmadı");
}

console.log(Boolean(xyz)); //false
console.log(Boolean(abc)); //true
console.log(Boolean(def)); //false

let personel = null;
console.log(typeof personel); //string geliyor ama bu bir js hatası

let telno;
console.log(telno);
console.log(typeof telno);
telno = 123456789;
console.log(telno);

let num1 = 10;
let str = "where";
let birlestir = num1 + str;
console.log(birlestir);

//isNan not a number mı diye soruyor

let result = "asdd";
console.log(isNaN(result)); //true döner

//----****NON PRİMİTİVE **** ----

// array[], function, objeler{}
//diğerlerine göre daha büyük veriler
// küçük veriler stack de depolanıyor. büyükler heap te.

let personellist = ["Ali", "Mehmet", "Ayşe"]; //dizi-array
let personeldata = {
  name: "ali",
  surname: "yıldız",
  age: "30",
};

function name(params) {
  //*****
  return "toplam 5";
}
