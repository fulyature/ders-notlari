console.log("APP JS");

const h1 = document.querySelector("h1");
h1.textContent = "Without Modules";

const students = ["Tuba", "Hüsnü", "Caner"];

const products = [
  {
    name: "İphone15",
    price: "2000",
  },
  {
    name: "İphone12",
    price: "1750",
  },
  {
    name: "Samsung",
    price: "1000",
  },
];

// const calculate = (arr) => {
//   return arr.reduce((x, y) => x + Number(y.price), 0);
// };

console.log(calculate(products));
