//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const getNews = async () => {
  const BASE_URL = "https://newsapi.org/v2/"
  const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"
  const query = "javascript"
  const language = "de"
  const newsType = "everything"

  // ?  "https://newsapi.org/v2/everything?q=javascript&apiKey=1a1a999e0d7240a6bd2dead87bcca78e&language=tr"

  try {
    //? error handling
    const URL = `${BASE_URL}${newsType}?q=${query}&language=${language}&apiKey=${API_KEY}`
    const res = await fetch(URL)

    if (!res.ok) {
      throw new Error(res.status)
    }
    const data = await res.json()
    renderNews(data.articles)
  } catch (error) {
    console.log(error)
  }
}

const renderNews = (news) => {
  const newsArticle = document.querySelector("#news")
  const defaultImage = "./img/404.png"
  news.forEach((item) => {
    console.log(item)
    const { urlToImage, title, description, url } = item
    newsArticle.innerHTML += `
        <div class="card col-sm-6 col-md-4 col-xl-3"   >
            <img src="${
              urlToImage || defaultImage
            }" class="card-img-top" alt="${urlToImage}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${url}" target="_blank"  class="btn btn-primary">Detaya Git</a>
            </div>
        </div>
    `
  })
}

getNews()
