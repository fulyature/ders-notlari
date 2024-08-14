console.log("CALCULATE.JS");
const calculate = (arr) => {
  return arr.reduce((x, y) => x + Number(y.price), 0);
};
