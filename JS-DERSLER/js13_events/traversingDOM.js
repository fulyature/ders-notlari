console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*---------------------------------------------

const btn = document.getElementById("btn");

console.log(btn.parentElement); //<section class="add-item d-flex gap-2 mb-4">…</section>

console.log(btn.parentNode); //<section class="add-item d-flex gap-2 mb-4">…</section>

console.log(btn.parentNode.parentNode); //<main class="container mt-4">…</main>

console.log(btn.parentNode.parentNode.parentNode); //body

console.log(btn.parentNode.parentNode.parentNode.parentNode.parentNode); //#document

console.log(
  btn.parentElement.parentElement.parentElement.parentElement.parentElement //null
);

//! parentElement, parentNode

//* 2- Asagi Yonde traverse
//*----------------------------------------------const iphone15 = document.querySelector("ul li:nth-child(1)");

const iphone15 = document.querySelector("ul li:nth-child(1)");

console.log(iphone15.closest("section"));

console.log(iphone15.closest(".container").querySelector("h2"));
//? Children, firstElementChild, lastElementChild

console.log(iphone15.firstChild); //"IPhone15"

console.log(iphone15.ElementChild); //undefined

console.log(iphone15.firstElementChild); //? null

const section = document.querySelector(".product-list");

console.log(section.firstChild); //? bir yazi dgumunun yazi elemntini gosterir.

console.log(section.firstElementChild); //? h2

console.log(section.lastElementChild); //? ul

const deneme =
  document.querySelector("main").firstElementChild.firstElementChild;

console.log(deneme);

//* 3- Yatay Yonde traverse
//*----------------------------------------------

const s24 = document.querySelector("ul li:nth-child(3)");
console.log(s24.previousElementSibling.textContent);
console.log(s24.nextElementSibling.textContent);

//! nextElementSibling ,previousElementSibling
