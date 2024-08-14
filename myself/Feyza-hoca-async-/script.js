const searchInput = document.querySelector("#search");

const cardDiv = document.querySelector(".cardDiv");

const verileriGetir = async () => {
  const ınputValue = searchInput.value;

  if (!ınputValue) {
    cardDiv.innerHTML = "";
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${ınputValue}`;
    try {
      const response = await fetch(url);
      // console.log(response);
      if (!response.ok) {
        throw new Error(`hata kodu ${response.status}`);
        //istek gitti cvp alamıyor. belki yetkin yoktur yada isin verılmıyordur
      }

      const data = await response.json();

      arama(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      //istek gitmiyor.response donemıyor. url yani kaynak dogru değil
    }
  }
};
verileriGetir();

function arama(data) {
  cardDiv.innerHTML = "";
  const cards = [];
  data.meals.forEach((meal) => {
    cards.push(`
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
            <p>${meal.strInstructions}</p>
            </div>
        </div>
        `);
  });
  cardDiv.innerHTML = cards;
}
searchInput.addEventListener("input", verileriGetir);
