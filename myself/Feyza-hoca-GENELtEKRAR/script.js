console.log("calisma");
const data = [
  {
    name: "1 - Fernando Muslera",
    img: "https://hlkiurt3.rocketcdn.com/profiles/b13b9abd2c5e41a1a6d69d21e2bb2cce.jpeg",
    statistics: [
      "Goalkeeper",
      "602 match",
      "656 goals conceded",
      "203 goalless match",
    ],
    detail: "https://www.galatasaray.org/p/1-fernando-muslera/847",
  },
  {
    name: "12 - Atakan Nuri Ordu",
    img: "https://hlkiurt3.rocketcdn.com/profiles/85fba7f3ed1b432fa742b5e22c82caa2.jpeg",
    statistics: [
      "Goalkeeper",
      "15 match",
      "18 goals conceded",
      "5 goalless match",
    ],
    detail: "https://www.galatasaray.org/p/12-atakan-nuri-ordu/646",
  },
  {
    name: "19 - Günay Güvenç",
    img: "https://hlkiurt3.rocketcdn.com/profiles/8eccf3037648405e8f0aaad04d9072ab.jpeg",
    statistics: [
      "Goalkeeper",
      "318 match",
      "395 goals conceded",
      "91 goalless match",
    ],
    detail: "https://www.galatasaray.org/p/19-gunay-guvenc/3133",
  },
  {
    name: "50 - Jankat Yılmaz",
    img: "https://hlkiurt3.rocketcdn.com/profiles/49c43d5fb17d424c8391d4772ff3b746.jpeg",
    statistics: [
      "Goalkeeper",
      "11 match",
      "16 goals conceded",
      "2 goalless match",
    ],
    detail: "https://www.galatasaray.org/p/50-jankat-yilmaz/1024",
  },
  {
    name: "3 - Angeliño",
    img: "https://hlkiurt3.rocketcdn.com/profiles/6fb67b1993ec452c949f32df9a52083f.jpeg",
    statistics: ["Left Back", "347 match", "24 goals", "77 assist"],
    detail: "https://www.galatasaray.org/p/3-angelino/3126",
  },
  {
    name: "6 - Davinson Sánchez",
    img: "https://hlkiurt3.rocketcdn.com/profiles/8f0e1ac29bcb4a17a2c4c17a652c8fc2.jpeg",
    statistics: ["Center Back", "310 match", "14 goals", "5 assist"],
    detail: "https://www.galatasaray.org/p/6-davinson-sanchez/3151",
  },
  {
    name: "23 - Kaan Ayhan",
    img: "https://hlkiurt3.rocketcdn.com/profiles/95d9769b8db34febbdd87d81e714ea56.jpeg",
    statistics: ["Center Back", "347 match", "51 goals", "34 assist"],
    detail: "https://www.galatasaray.org/p/23-kaan-ayhan/3108",
  },
  {
    name: "25 - Victor Nelsson",
    img: "https://hlkiurt3.rocketcdn.com/profiles/80fe338dc7f14c0784a8f1e63fe16058.jpeg",
    statistics: ["Center Back", "288 match", "5 goals", "4 assist"],
    detail: "https://www.galatasaray.org/p/25-victor-enok-nelsson/2671",
  },
  {
    name: "42 - Abdülkerim Bardakcı",
    img: "https://hlkiurt3.rocketcdn.com/profiles/9bc566724a734fee8d3acef1b3cd09b5.jpeg",
    statistics: ["Center Back", "330 match", "25 goals", "14 assist"],
    detail: "https://www.galatasaray.org/p/42-abdulkerim-bardakci/2924",
  },
  {
    name: "58 - Ali Yeşilyurt",
    img: "https://hlkiurt3.rocketcdn.com/profiles/65b168709dd44ea4903262b2f49bb2ab.jpeg",
    statistics: ["Center Back", "36 match", "3 goals", "0 assist"],
    detail: "https://www.galatasaray.org/p/58-ali-yesilyurt/642",
  },
  {
    name: "72 - Ali Turap Bülbül",
    img: "https://hlkiurt3.rocketcdn.com/profiles/079cbb46eaf64e9881a8980866e9754f.jpeg",
    statistics: ["Right Back", "39 match", "3 goals", "6 assist"],
    detail: "https://www.galatasaray.org/p/72-ali-turap-bulbul/640",
  },
  {
    name: "88 - Kazımcan Karataş",
    img: "https://hlkiurt3.rocketcdn.com/profiles/1e55c213e2b94da4a309f44d2d61e314.jpeg",
    statistics: ["Left Back", "53 match", "1 goals", "2 assist"],
    detail: "https://www.galatasaray.org/p/88-kazimcan-karatas/2930",
  },
  {
    name: "93 - Sacha Boey",
    img: "https://hlkiurt3.rocketcdn.com/profiles/df9f8bf5e56a428da226c226ccaa1044.jpeg",
    statistics: ["Right Back", "145 match", "6 goals", "7 assist"],
    detail: "https://www.galatasaray.org/p/93-sacha-boey/2654",
  },
  {
    name: "5 - Eyüp Aydın",
    img: "https://hlkiurt3.rocketcdn.com/profiles/423b322f30c74e32a9b0f6b5f6cd8ce1.jpeg",
    statistics: ["Defensive Midfielder", "63 match", "4 goals", "10 assist"],
    detail: "https://www.galatasaray.org/p/5-eyup-aydin/3158",
  },
  {
    name: "8 - Kerem Demirbay",
    img: "https://hlkiurt3.rocketcdn.com/profiles/2581836e87674158ab5247a83381b29a.jpeg",
    statistics: ["Center Midfielder", "409 match", "66 goals", "78 assist"],
    detail: "https://www.galatasaray.org/p/8-kerem-demirbay/3135",
  },
  {
    name: "20 - Tetê",
    img: "https://hlkiurt3.rocketcdn.com/profiles/4a60254fef4644999ef61e57dd9f6548.jpeg",
    statistics: ["Right Wing Midfielder", "170 match", "41 goals", "27 assist"],
    detail: "https://www.galatasaray.org/p/20-tete/3137",
  },
  {
    name: "27 - Sergio Oliveira",
    img: "https://hlkiurt3.rocketcdn.com/profiles/7f99e97a7789469f97c924efdbbc6972.jpeg",
    statistics: ["Center Midfielder", "404 match", "69 goals", "38 assist"],
    detail: "https://www.galatasaray.org/p/27-sergio-oliveira/2933",
  },
  {
    name: "34 - Lucas Torreira",
    img: "https://hlkiurt3.rocketcdn.com/profiles/9737066db374431d8679eecdc5c3492b.jpeg",
    statistics: ["Defensive Midfielder", "343 match", "23 goals", "14 assist"],
    detail: "https://www.galatasaray.org/p/34-lucas-torreira/2975",
  },
  {
    name: "81 - Hamza Yiğit Akman",
    img: "https://hlkiurt3.rocketcdn.com/profiles/8498ae7df6654d78b089a63724ff100a.jpeg",
    statistics: ["Center Midfielder", "76 match", "21 goals", "18 assist"],
    detail: "https://www.galatasaray.org/p/81-hamza-yigit-akman/2837",
  },
  {
    name: "91 - Tanguy Ndombele",
    img: "https://hlkiurt3.rocketcdn.com/profiles/cf52b4ff92c84843bb3e007b81cd6aeb.jpeg",
    statistics: ["Center Midfielder", "287 match", "19 goals", "35 assist"],
    detail: "https://www.galatasaray.org/p/91-tanguy-ndombele-alvaro/3152",
  },
  {
    name: "83 - Efe Akman",
    img: "https://hlkiurt3.rocketcdn.com/profiles/00ade2f3658c4592abc19b36b80d73f9.jpeg",
    statistics: ["Defensive Midfielder", "26 match", "0 goals", "0 assist"],
    detail: "https://www.galatasaray.org/p/efe-akman/617",
  },
  {
    name: "7 - Kerem Aktürkoğlu",
    img: "https://hlkiurt3.rocketcdn.com/profiles/0a6f87169be74672a93811645295ccb6.jpeg",
    statistics: ["Left Wing Midfielder", "241 match", "62 goals", "40 assist"],
    detail: "https://www.galatasaray.org/p/7-kerem-akturkoglu/2515",
  },
  {
    name: "9 - Mauro Icardi",
    img: "https://hlkiurt3.rocketcdn.com/profiles/967d5155b4db4b8f8b80c714ee951561.jpeg",
    statistics: ["Striker", "432 match", "242 goals", "56 assist"],
    detail: "https://www.galatasaray.org/p/9-mauro-icardi/3028",
  },
  {
    name: "10 - Dries Mertens",
    img: "https://hlkiurt3.rocketcdn.com/profiles/c758a74207e24295b523a29185eb2dbf.jpeg",
    statistics: [
      "Attacking Midfielder",
      "738 match",
      "257 goals",
      "191 assist",
    ],
    detail: "https://www.galatasaray.org/p/10-dries-mertens/2980",
  },
  {
    name: "14 - Wilfried Zaha",
    img: "https://hlkiurt3.rocketcdn.com/profiles/2c3d558a44c94a248b10b3ac4f2011e9.jpeg",
    statistics: ["Left Wing Midfielder", "494 match", "97 goals", "79 assist"],
    detail: "https://www.galatasaray.org/p/14-wilfried-zaha/3136",
  },
  {
    name: "21 - Halil Dervişoğlu",
    img: "https://hlkiurt3.rocketcdn.com/profiles/6d77f7cdef5e458ba9805089471a172d.jpeg",
    statistics: ["Striker", "190 match", "58 goals", "31 assist"],
    detail: "https://www.galatasaray.org/p/21-halil-dervisoglu/3134",
  },
  {
    name: "22- Hakim Ziyech",
    img: "https://hlkiurt3.rocketcdn.com/profiles/8f046fc7608c4577bdd13706fb84bf07.jpeg",
    statistics: [
      "Right Wing Midfielder",
      "463 match",
      "129 goals",
      "139 assist",
    ],
    detail: "https://www.galatasaray.org/p/22-hakim-ziyech/3146",
  },
  {
    name: "53 - Barış Alper Yılmaz",
    img: "https://hlkiurt3.rocketcdn.com/profiles/0d5e7b8ab8cc41e680c38ce4b31fcc70.jpeg",
    statistics: ["Right Wing Midfielder", "159 match", "17 goals", "14 assist"],
    detail: "https://www.galatasaray.org/p/53-baris-alper-yilmaz/2666",
  },
  {
    name: "56 - Baran Demiroğlu",
    img: "https://hlkiurt3.rocketcdn.com/profiles/32ddde173b284a589a6ab1df1b515d2e.jpeg",
    statistics: ["Striker", "38 match", "18 goals", "3 assist"],
    detail: "https://www.galatasaray.org/p/56-baran-demiroglu/647",
  },
  {
    name: "94 - Cédric Bakambu",
    img: "https://hlkiurt3.rocketcdn.com/profiles/5465d1e0ba16486889066bbdf348b23e.jpeg",
    statistics: ["Striker", "412 match", "171 goals", "41 assist"],
    detail: "https://www.galatasaray.org/p/94-cedric-bakambu/3132",
  },
];

const gsbtn = document.querySelector(".gsbtn");

const cardDiv = document.querySelector(".cardDiv");

const searchInput = document.querySelector(".form-control");

const displayPlayers = (players) => {
  cardDiv.innerHTML = "";
  players.forEach(({ name }) => {
    cardDiv.innerHTML += `
    

    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
   
  </div>
</div>
    `;
  });
};
//
//
//**1.yontem */
gsbtn.addEventListener("click", () => {
  displayPlayers(data);
  cardDiv.classList.toggle("d-none");
  searchInput.classList.toggle("d-none");
});

//**2.yontem */
//varşığı kontrol eder koşula göre "remove" yada "add" çalışır
// gsbtn.addEventListener("click", () => {
//   if (cardDiv.classList.contains("d-none")) {
//     displayPlayers();
//     cardDiv.classList.remove("d-none");
//   } else {
//     cardDiv.classList.add("d-none");
//   }
// });

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredPlayer = data.filter((player) =>
    player.name.toLowerCase().includes(searchValue)
  );
  displayPlayers(filteredPlayer);
});
