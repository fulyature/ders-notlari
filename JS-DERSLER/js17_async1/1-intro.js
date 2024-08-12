//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
// const wait = (ms) => {
//   //? blocking
//   const start = new Date().getTime()
//   while (new Date().getTime() < start + ms) {}
// }

// console.log("Senknron")
// // alert("Dikkat") //? Block

// console.time("timer1")
// wait(1000)
// console.timeEnd("timer1")
// console.log("Cok sessizsiniz")

//* Asenkron (setTimeout()) - Belirli sure sonraya zaman kurar.
//* ------------------------------------------------
// console.log("ASYN")

// setTimeout(() => {
//   console.log("Timeout1")
// }, 1000)

// const timeout2 = setTimeout(() => {
//   console.log("Timeout2")
// }, 1000)

// setTimeout(() => {
//   console.log("Timeout3")
//   clearTimeout(timeout2)
// }, 500)

// console.log("SON")

//* Asenkron (setInterval, clearInterval) - Periyodik bir aralik belirler
//*------------------------------------------------
// let counter = 0
// console.log("başladı")

// const intervalId = setInterval(() => {
//   console.log(++counter)
//   if (counter === 10) {
//     clearInterval(intervalId)
//   }
// }, 1000)

// console.log("Bitti")

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi") //? veri isteği (req)
  setTimeout(() => {
    console.log("Sarah: Hello") //? res geliyor
    setTimeout(() => {
      console.log("John: How Are you?") //? veri gonder
      setTimeout(() => {
        console.log("Sarah:Fine and you?") //?gondermeye baslaniyor
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (Custom async kod yazmak için elverişli- Advance)
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)