function meuEscopo() {
    const relogio = document.querySelector('.relogio');
    let incremento = 0;
    let timer;

    function mostrarHora(segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        });
    }
    const funcaoIniciar = function () {
        timer = setInterval(function () {
            incremento++;
            relogio.innerHTML = mostrarHora(incremento);
        }, 1000);
    }

    document.addEventListener('click', function (evento) {
        const elemento = evento.target;
        if (elemento.classList.contains('botaoIniciar')) {
            console.log('Cliquei no iniciar');
            clearInterval(timer);
            funcaoIniciar();
            relogio.style.color = 'black';
        }
        if (elemento.classList.contains('botaoPausar')) {
            console.log('Cliquei no pausar');
            clearInterval(timer);
            relogio.style.color = 'red';
        }
        if (elemento.classList.contains('botaoZerar')) {
            console.log('Cliquei no zerar');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            incremento = 0;
            relogio.style.color = 'black';
        }
    });
}
meuEscopo();
