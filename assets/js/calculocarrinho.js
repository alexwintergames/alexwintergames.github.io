var decreaseButton = document.getElementById("decrease2");
var increaseButton = document.getElementById("increase2");
var quantityInput = document.getElementById("quantity2");
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
  let fonedesconto = 159.90 * multiplicador;
  var nome2 = "R$" + fonedesconto.toFixed(2);
  var nome3 = "R$" + fonedesconto.toFixed(2);

  var elementoNome2 = document.getElementById("nome-usuario3");
  var elementoNome3 = document.getElementById("nome-usuario4");
  elementoNome2.innerHTML = nome2;
  elementoNome3.innerHTML = nome3;
}
