document.getElementById("submit-btn").addEventListener("click", function () {
  // Input alanlarının değerlerini al
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  // Çıktı alanına yaz
  const newEntry = document.createElement("p");
  newEntry.textContent = `${input1} ${input2}`;
  document.getElementById("output").appendChild(newEntry);
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
});
