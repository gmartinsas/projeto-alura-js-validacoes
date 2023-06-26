function validaChute(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        chuteHTML.innerHTML += '<div>Por favor, diga um NÚMERO.</div>';
        return;
    }

    if (numero < menorValor || numero > maiorValor) {
        chuteHTML.innerHTML += `<div>Valor inválido. Diga um valor entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!<h1>
        <h3>O número secreto era:</h3>
        <span class="box">${numeroSecreto}</span>

        <button id="jogar-novamente" class="btn">Jogar novamente</button>
        `;        
    } else if (numero > numeroSecreto) {
        chuteHTML.innerHTML += `<div>O número secreto é <span>menor</span>. <i class="fa-solid fa-arrow-down"></i></div>`;
    } else {
        chuteHTML.innerHTML += `<div>O número secreto é <span>maior</span>. <i class="fa-solid fa-arrow-up"></i></div>`;
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})