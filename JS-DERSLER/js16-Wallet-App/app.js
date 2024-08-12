//?Selectors

//* ekle formu

const ekleBtn = document.querySelector("#ekle-btn");
const gelirInput = document.querySelector("#gelir-input");
const ekleFormu = document.querySelector("#ekle-formu");

//*sonuç tablosu

const gelirinizTable = document.getElementById("geliriniz");
const giderinizTable = document.getElementById("gideriniz");
const kalanTable = document.getElementById("kalan");

//?variables
let gelirler = Number(localStorage.getItem("gelirler")) || 0;
let harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []



//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//! ilk formu doldurma

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //reload u engellemek için

  const yeniHarcama = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    aciklama: harcamaAlaniInput.value,
    id: new Date().getTime(),
  };

  harcamaListesi.push(yeniHarcama);


  //?localStorage ye diziyi yollayalım

  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi) )

  //ekrana bastır
  harcamayiShowScreen(yeniHarcama);

  harcamaFormu.reset();
  // tarihInput=""

  hesaplaAndGuncelle();
});

//! harcamaları dom daki table a bastır

const harcamayiShowScreen = ({ id, miktar, tarih, aciklama }) => {
  // const{id,miktar,tarih,aciklama}=harcamaListesi

  harcamaBody.innerHTML += `
<tr>
<td class="bg-warning">${tarih} </td>
<td class="bg-warning">${aciklama}</td>
<td class="bg-warning">${miktar} </td>
<td class="bg-warning"> <i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i>  </td>
</tr>


`;

  //*silme

  document.querySelectorAll(".fa-trash-can").forEach((sil) => {
    sil.onclick = () => {
      sil.parentElement.parentElement.remove();
// console.log(sil);


harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != sil.id);

localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));



    };
  });
};

//! ekle formu

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();

  gelirler = gelirler + Number(gelirInput.value);

  gelirInput.value=""
  // gelirinizTable.textContent=gelirler

localStorage.setItem("gelirler", gelirler)

  hesaplaAndGuncelle();
});

//! hesapla ve güncelle

const hesaplaAndGuncelle = () => {
  gelirinizTable.textContent = gelirler;

  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );

  giderinizTable.textContent = giderler;

  kalanTable.textContent = gelirler - giderler;
};


//!bilgileri temizle

temizleBtn.onclick=()=>{

    if(confirm("tüm verileri silmek istediğine emin misin?")){
harcamaListesi=[]

gelirler=0

hesaplaAndGuncelle()

 harcamaBody.innerHTML=""


    }
}


//!refresh durrumunda localStroge den veriler ekrana basılsın
harcamaListesi.forEach((a)=>{
harcamayiShowScreen(a)

})
//  harcamayiShowScreen(harcamaListesi);
hesaplaAndGuncelle();