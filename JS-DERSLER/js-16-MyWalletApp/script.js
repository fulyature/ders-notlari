//Selectors

//Ekle formu

const ekleBtn = document.querySelector("#ekle-btn");

const gelirInput = document.querySelector("#gelir-input");

const ekleFormu = document.querySelector("#ekle-formu");

//sonuc tablosu

const gelirinizTablo = document.getElementById("geliriniz");

const giderinizTablo = document.getElementById("gideriniz");

const kalanTablo = document.getElementById("kalan");

//variables

let gelirler = 0;

let harcamaListesi = [];

//Harcama formunda

const harcamaFormu = document.getElementById("harcama-formu");

const tarihInput = document.getElementById("tarih");

const miktarInput = document.getElementById("miktar");

const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu

const harcamaBody = document.getElementById("harcama-body");

const temizleBtn = document.getElementById("temizle-btn");

//**ilk formu doldurma */

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //reload u engellemek için

  const yeniHarcama = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    aciklama: harcamaAlaniInput.value,
    id: new Date().getTime(),
  };

  harcamaListesi.push(yeniHarcama);

  //**LOCALSTORAGE */

  localStorage.setItem("harcamalar", JSON.sitringify(harcamaListesi));
  //ekrana bastır
  harcamayiShowScreen(yeniHarcama);

  harcamaFormu.reset();

  //   tarihInput = "";
  //   miktarInput = "";
  //   harcamaAlaniInput = "";

  hesaplaAndGuncelle();
});

//! harcamaları dom daki table a bastır

const harcamayiShowScreen = ({ id, miktar, tarih, aciklama }) => {
  // const{id,miktar,tarih,aciklama}=harcamaListesi

  harcamaBody.innerHTML += `
  <tr>
  <td>${tarih} </td>
  <td>${aciklama}</td>
  <td>${miktar}</td>
  <td><i class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
  </tr>
  
  
  `;

  //silme

  document.querySelectorAll(".fa-trash-can").forEach((sil) => {
    sil.onclick = () => {
      sil.parentElement.parentElement.remove();
    };
  });
};

//Gelir ekle

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();

  gelirler = gelirler + Number(gelirInput.value);
  gelirInput.value = "";
  //gelirinizTablo.textContent = gelirler;

  hesaplaAndGuncelle();
});

//hesapla ve güncelle

const hesaplaAndGuncelle = () => {
  gelirinizTablo.textContent = gelirler;

  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );

  giderinizTablo.textContent = giderler;

  kalanTablo.textContent = gelirler - giderler;
};
//bilgileri temizle

temizleBtn.onclick = () => {
  if (confirm("tüm verileri silmek istediğine emin misin?")) {
    harcamaListesi = [];

    gelirler = 0;

    hesaplaAndGuncelle();
    harcamaBody.innerHTML = "";
  }
};
