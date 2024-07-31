const inputList = document.querySelector("#std-input");

const liste = document.querySelector(".liste");

const buton = document.querySelector(".ekle");

// buton.onclick = () => {
//   //* yeni girilen satiri saklamak icin bir li olusturduk.

//   const yeniLi = document.createElement("li");

//   //* yeni li icin textnode olusturduk

//   const text = document.createTextNode(inputList.value);

//   //*olusturdugumuz texnode'u yeni li'ye bagladik.

//   yeniLi.appendChild(text);

//   //* yeni eklenen satiri var olan listeye (ul) baglayalim.

//   //   liste.prepend(yeniLi);
//   liste.append(yeniLi);
//   //   liste.after(yeniLi);
//   yeniLi.className = "text-primary";
// };

//Kısayol
buton.onclick = () => {
  liste.innerHTML += `

<li class="text-success"> ${inputList.value} </li>`;

  inputList.value = "";

  inputList.focus();
};

//
//sil
//

document.querySelector(".sil").onclick = () => {
  //   liste.removeChild(liste.lastElementChild);
  //   liste.removeChild(liste.firstElementChild);
  liste.removeChild(liste.children[2]); //sadece remove de hepsini siler
};

//
//son section a h2(student list) ekleyelim

document.querySelector(
  ".student-list"
).innerHTML = `<h2 class="text-danger">Student List</h2>`;
