window.onload = function () {
  var numero = 5;

  var resultado = parImpar(numero);
  console.log("El número " + numero + " es " + resultado);

  function parImpar(numero) {
    if (numero % 2 == 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
};
