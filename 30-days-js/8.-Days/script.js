//1
const dog = {
  cinsi: "abc",
  yasi: 3,
  rengi: "beyaz",
};
console.log(dog);

dog.bark = "woof woof";
console.log(dog.bark);

dog.legs = 4;
dog.name = "x0";
console.log("namemi şu", dog.name);
console.log("kaç ayaklı?", dog.legs);
dog.breed = "Golden Retriver";
//*****************************
dog.getDogInfo = function () {
  return `adı:${dog.name}, yasi:${dog.yasi},ayaksayısı:${dog.legs},rengi:${dog.rengi}`;
};
console.log("köpek bilgisi", dog.getDogInfo());
//****************************** */
//**LEVEL 2 */
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//
//
//**1.En çok beceriye sahip kişiyi bul */
let maxSkills = 0;
let mostSkilledUser = "";
for (let i in users) {
  if (users[i].skills.length > maxSkills) {
    maxSkills = users[i].skills.length;
    mostSkilledUser = i;
    console.log(users[i].skills);
  }
}
console.log(`en çok skillere sahip kişi${mostSkilledUser}`);
console.log(`becerileri ${users[mostSkilledUser].skills}`);
/////OBJE LERDE FOR İN DÖNGÜ İLE DÖNERKEN "i" SANA KEY LERİ VERİYOR.. !!!

const deneme = ["ali", "atlara", "bak"];

for (let i in deneme) {
  if (deneme[i].length > 3) {
    console.log(i);
  }
}
//
//
// 2. soru Count logged in users, count users having greater than equal to 50 points from the following object.

for (let i in users) {
  if (users[i].points === 50 && users[i].isLoggedIn === true) {
    console.log(i);
  }
}
//find MERN
for (const i in users) {
  const skills = users[i].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ) {
    console.log(i);
  }
}
// 4. Set your name in the users object without modifying the original users object
const newUsers = {
  ...users,
  Fulya: {
    email: "myname@example.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "SASS"],
    age: 25,
    isLoggedIn: true,
    points: 100,
  },
};
console.log(newUsers);
//
const myUser = {
  myName: {
    email: "myname@example.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 25,
    isLoggedIn: true,
    points: 100,
  },
};
const updatedUsers = {
  ...users,
  ...myUser,
};

console.log(updatedUsers);
//5. sor get all keys
const allKeys = [];
for (i in users) {
  allKeys.push(i);
}
console.log(allKeys);
// 6. Get all the values of users object
const allValues = Object.values(users);

console.log(allValues);
