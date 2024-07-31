/* -------------------------------------------------------------------------- */
//!                                  DOM INTRO                                */
/* -------------------------------------------------------------------------- */
// DOM dökümanların stillerinin, yapısının, içeriğinin erişilmesine ve güncellenmesine olanak sağlayan, dilden bağımsız bir arabirimdir.
// DOM HTML Api olark bize bir kod bloğu sunuyor. Bu sayede HTML, CSS e JS ile erişip manipule edebiliyorum.
// HTML ve CSS ile statik değişiklikler yapabiliyor, ama JS ile dinamiklik sağlıyor.

// HTML DOM API (Application Programming Interface), web sayfalarındaki HTML ve XML belgelerini programlama dilleri (genellikle JavaScript) aracılığıyla dinamik olarak manipüle etmenizi sağlayan bir dizi yöntem ve özellikler topluluğudur.

// Bu API, HTML belgelerini ve belgelerdeki elementleri temsil eden bir nesne modeline erişim sağlar ve bu modelde değişiklikler yapmanıza olanak tanır.

//?DOM elemenlarının hepsi Object haline gelir.
//? Bu sayede Tüm HTML elemanlarının propertylerini  - lenght
//? Bu sayede Tüm HTML elemanlarının metodlarını 
//? Bu sayede Tüm HTML elemanlarının olayları alabilirsiniz.


/* -------------------------------------------------------------------------- */
//!                           Belgeye Erişim Yöntemleri                       */
/* -------------------------------------------------------------------------- */
// document.getElementById(id): Belirtilen id'ye sahip olan ilk elemente erişir.
// document.getElementsByClassName(className): Belirtilen sınıfa (class) sahip tüm elementleri bir HTMLCollection olarak döner.
// document.getElementsByTagName(tagName): Belirtilen etiket adına sahip tüm elementleri bir HTMLCollection olarak döner.
// document.querySelector(selector): Belirtilen CSS seçicisine (selector) uyan ilk elemente erişir.
// document.querySelectorAll(selector): Belirtilen CSS seçicisine (selector) uyan tüm elementleri bir NodeList olarak döner.

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
document.getElementById("moviesHeader").style.color="red"
document.getElementById("moviesHeader").style.fontWeight="bolder"
document.getElementById("moviesHeader").style.fontSize="2.5rem"

const moviesHeader=document.getElementById("moviesHeader")

const inception=document.getElementById("inception")
console.log(inception)
// camelcase ile ifa ediliyor
inception.style.backgroundColor="lime"

inception.innerText="God Father"
inception.innerHTML=`<h3 style="background-color:gray">Blacklist</h3>
<p>I like this series</p>`


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
/// HTML Collection - array- like bir yapı ama direk array gibi kullanılamıyor o nedenle arraye dönüştürmek gerekir.
//ArrayLike yapılar : arguments, HTML collection,NodeList(querySelectorAll ile gelir)
// Array ile ArrayLike yapı arasındaki fark: Array-like yapılar diziler gibi indekslenebilir ve length özelliğine sahip olabilirler, ancak dizilerin sunduğu çoğu yöntemden (örneğin, push, pop, map, filter, vb.) yoksundurlar

const addNewMovie=document.getElementsByClassName("movie-item")
console.log(addNewMovie)

//Bu yapının içine girme yöntemleri
//1-For yapısı
for (let i=0;i<addNewMovie.length;i++){
    console.log(addNewMovie[i].textContent)
}
// console.clear()
//2-Spread operatoru ile arraye çevirelim
const arrayMovies=[...addNewMovie]
console.log(arrayMovies)
// Arraye çevirmemizin nedeni array metodlarından(map,filter,reduce,foreach) faydalanmak
arrayMovies.forEach((item)=>item.style.color="blue")

//3-Array.from(arrayLike)
console.log("Array.from",Array.from(arrayMovies))
console.clear()
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const listItems=document.getElementsByTagName("li")
console.log(listItems)

const h2Ler=document.getElementsByTagName("h2")
console.log(h2Ler)

const h2lerArray=[...h2Ler]
console.log(h2lerArray)
h2lerArray.forEach((item)=> console.log(item.textContent))


//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//? querySelector ve querySelectorAll  Her iki yöntem de CSS seçicilerini kullanarak elemanları seçmenizi sağlar.

// Css de classlara . ile erişim sağlarız
// Css de id lere # ile erişim sağlarız.
// Css de etikerlere(tag) direk erişim sağlarız

// document.querySelector(selector) yöntemi, belirtilen CSS seçicisine uyan ilk elementi döner.

document.querySelector("#tenet").style.backgroundColor="cadetblue"
document.querySelector(".add-new").style.backgroundColor="pink"
document.querySelector(".movie-item").style.backgroundColor="yellow"
document.querySelector(".movie-item").style.backgroundColor="orange"

// Diğer bir önemli özelliği
// CSS yapısı gibi seçim yapmayı sağlar
document.querySelector("#movie-ul #avatar").style.backgroundColor="crimson"


//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const movies=document.querySelectorAll(".movie-item")
console.log(movies)

const arrMovies=[...movies]
console.log(arrMovies)

