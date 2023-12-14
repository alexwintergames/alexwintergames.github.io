var decreaseButton = document.getElementById("decrease");
var increaseButton = document.getElementById("increase");
var quantityInput = document.getElementById("quantity");
var multiplicador = 1;

decreaseButton.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);

  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    multiplicador = currentValue - 1;
    atualizarPrecoprocessador();
  }
});

increaseButton.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);

  quantityInput.value = currentValue + 1;
  multiplicador = currentValue + 1;
  atualizarPrecoprocessador();
});

function atualizarPrecoprocessador() {
  let precofone = 209.90 * multiplicador;
  let fonedesconto = 179.90 * multiplicador;
  var nome = "R$" + precofone.toFixed(2);
  var nome2 = "R$" + fonedesconto.toFixed(2);

  var elementoNome = document.getElementById("nome-usuario");
  elementoNome.innerHTML = nome;
  var elementoNome2 = document.getElementById("nome-usuario2");
  elementoNome2.innerHTML = nome2;
}
