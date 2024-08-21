let totalIncome = 0;
let totalExpenses = 0;
//
function updateTotals() {
  document.getElementById("totalIncome").textContent = totalIncome;

  document.getElementById("totalExpenses").textContent = totalExpenses;

  document.getElementById("remainingBalance").textContent =
    totalIncome - totalExpenses;
}

//sabe buton

document.getElementById(".saveButton").addEventListener("click", function () {
  const dateInput = document.getElementById("dateInput").value;

  const amountInput = document.getElementById("amountInput").value;
});

if (dateInput && amountInput && areaInput) {
}
