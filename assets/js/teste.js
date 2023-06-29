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
  let precoprocessador = 375.90 * multiplicador;
  var nome = "Processador Intel Core i5 - R$" + precoprocessador.toFixed(2);

  var elementoNome = document.getElementById("nome-usuario");
  elementoNome.innerHTML = nome;
}
