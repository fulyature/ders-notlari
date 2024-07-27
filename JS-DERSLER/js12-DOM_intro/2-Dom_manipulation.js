//1. element ekleme yöntemi

const movieUl = document.getElementById("movie-ul");

const yeniEleman = document.createElement("li");

yeniEleman.textContent = "Black List";

yeniEleman.className = "movie-item";

movieUl.appendChild(yeniEleman);

//2 yeni el eklmeke için daha kolay yöntem

//movieUl.innerHTML = `<li id="avatar" class="movie-item avatar">Gog Father</li>`; boyle yazarsan üzerine yazar(overwrite) ""+"" ile yaz.

movieUl.innerHTML += `<li id="avatar" class="movie-item avatar">Gog Father</li>`;

//
//**ELEMAN SİLME */

const matrix = document.getElementById("matrix");

movieUl.removeChild(matrix);

//
//ÖZELLİK EKLMEME(ATTRİBUTE EKLEME)

//SET ATRİBUTE

const movieInput = document.querySelector("#movie-input");

movieInput.setAttribute("placeholder", "Enter a movie name....");

movieInput.placeholder = "Nmew Movie";

movieInput.removeAttribute("type");

//
//Class ekleme
const avatar = document.getElementById("avatar");
avatar.classList.add("highlight");

//
//Class silme

const inters = document.getElementById("interstellar");
inters.classList.remove("interstellar");

//bir element bir class a sahip mi kontrolü
//contains => içeriyormu - true false

const check = inters.classList.contains("interstellar");
console.log(check);

const check1 = avatar.classList.contains("highlight");
console.log(check1);

if (avatar.classList.contains("highlight")) {
  avatar.style.fontSize = "3rem";
}
