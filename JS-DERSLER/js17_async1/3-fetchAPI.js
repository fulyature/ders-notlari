//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")
// let users = ""
fetch("https://api.github.com/usersfdgfd")
  .then((res) => {
    console.log(res)
    if (!res.ok) {
      //? Error handling
      throw new Error("Something went wrong")
    }
    return res.json()
  })
  .then((data) => {
    // console.log(data)
    // // users = data
    // console.log(users)
    showUserData(data)
  })
  .catch((err) => {
    // document.write(err)
    displayError(err)
  })

console.log("Bitti")
// console.log(users)

const showUserData = (data) => {
  const userDiv = document.getElementById("users")

  data.forEach((user) => {
    userDiv.innerHTML += `
      <h1>${user.login}</h1> 
      <img src="${user.avatar_url}" alt="avatar" width="200px"/>
      <h4>${user.repos_url}</h4>
      `
  })
}

const displayError = (err) => {
  const userDiv = document.getElementById("users")
  userDiv.innerHTML = ` <img src="./img/404.png" alt="" />`
}
