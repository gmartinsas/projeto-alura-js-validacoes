const menorValor = 1;
const maiorValor = 100;
const elementoMenorValor = document.getElementById('valor-min');
const elementoMaiorValor = document.getElementById('valor-max');
const numeroSecreto = gerarNumeroSecreto();

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

