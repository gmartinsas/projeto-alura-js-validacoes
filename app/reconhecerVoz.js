window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const chuteHTML = document.getElementById('chute');

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', transcreveFala);

function transcreveFala(evento) {  
    // Tirar ponto no final da string
    var str = evento.results[0][0].transcript;
    str = str.slice(0, -1);

    if (str == 'Sem') {
        chute = 100;
    } else if (str == "Game Over") {
        acabaJogo();
    } else {
        chute = str;
        exibeChuteHTML(chute);
        validaChute(chute);
    }
}

function exibeChuteHTML(chute) {
    chuteHTML.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>`;
}

function acabaJogo() {
    document.body.innerHTML = `
    <h1>Jogo encerrado! :(<h1>
    <button id="jogar-novamente" class="btn">Jogar novamente</button>
    `;
    document.body.style.backgroundColor = '#7E1717';
}

recognition.addEventListener('end', () => recognition.start());