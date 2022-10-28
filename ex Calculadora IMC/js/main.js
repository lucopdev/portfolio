function meuEscopo() {
    const entradaPeso = document.querySelector('#inputPeso');
    const entradaAltura = document.querySelector('#inputAltura');
    const formulario = document.querySelector('form#formulary');
    const botaoEnviar = document.querySelector('button#botaoEnviar');
    const saida = document.querySelector('section#saida');

    function resultado(msg) {
        saida.innerHTML = '';
        const p = document.createElement('p');
        p.classList.add('saida-p');
        p.innerHTML = msg;
        saida.appendChild(p);
    }
    function entrarBotao() {
        botaoEnviar.style.background = '#2657a1';
    }
    function clicarBotao() {
        botaoEnviar.style.background = '#1b2a52';
    }
    function levantarBotao() {
        botaoEnviar.style.background = '#2657a1';
    }
    function sairBotao() {
        botaoEnviar.style.background = '#679ee6';
    }

    function clicarPeso() {
        saida.innerHTML = '';
        saida.style.background = '#f1f1f3';
    }
    function clicarAltura() {
        saida.innerHTML = '';
        saida.style.background = '#f1f1f3';
    }

    function limpeza(inputPeso, inputAltura, limpar) {
        inputPeso.value = `${limpar}`;
        inputAltura.value = `${limpar}`;
    }
    function estilo(cor) {
        saida.style.background = cor;
    }

    function testeDadosInvalidos(entrada) {
        if (entrada.value === '') {
            return true;
        } else {
            return false;
        }
    }
    function getImc(entradaPeso, entradaAltura) {
        const imc = entradaPeso.value / (entradaAltura.value / 100) ** 2;
        return imc.toFixed(2);
    }

    entradaPeso.addEventListener('click', clicarPeso);

    entradaAltura.addEventListener('click', clicarAltura);

    botaoEnviar.addEventListener('mousedown', clicarBotao);

    botaoEnviar.addEventListener('mouseup', levantarBotao);

    botaoEnviar.addEventListener('mouseenter', entrarBotao);

    botaoEnviar.addEventListener('mouseout', sairBotao);

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const corAcerto = '#2dd6ce';
        const corErro = '#f56a8d';

        if (testeDadosInvalidos(entradaPeso) === true && testeDadosInvalidos(entradaAltura) === true) {
            estilo(corErro);
            limpeza(entradaPeso, entradaAltura, '');
            resultado('Dados inválidos!');
            return;
        }
        if (testeDadosInvalidos(entradaPeso) === true) {
            estilo(corErro);
            limpeza(entradaPeso, entradaAltura, '');
            resultado('Peso inválido!');
            return;
        }
        if (testeDadosInvalidos(entradaAltura) === true) {
            estilo(corErro);
            limpeza(entradaPeso, entradaAltura, '');
            resultado('Altura inválida!');
            return;
        } else {
            if (getImc(entradaPeso, entradaAltura) < 18.5) {
                estilo(corAcerto);
                resultado(`Seu IMC é ${getImc(entradaPeso, entradaAltura)} (Abaixo do normal).`);
            } else if (getImc(entradaPeso, entradaAltura) >= 18.5 && getImc(entradaPeso, entradaAltura) <= 24.9) {
                estilo(corAcerto);
                resultado(`Seu IMC é ${getImc(entradaPeso, entradaAltura)} (Peso normal).`);
            } else if (getImc(entradaPeso, entradaAltura) >= 25 && getImc(entradaPeso, entradaAltura) <= 29.9) {
                estilo(corAcerto);
                resultado(`Seu IMC é ${getImc(entradaPeso, entradaAltura)} (SOBREPESO)`);
            } else if (getImc(entradaPeso, entradaAltura) >= 30 && getImc(entradaPeso, entradaAltura) <= 34.9) {
                estilo(corAcerto);
                resultado(`Seu IMC é ${getImc(entradaPeso, entradaAltura)} (OBESIDADE GRAU 1!)`);
            } else if (getImc(entradaPeso, entradaAltura) >= 35 && getImc(entradaPeso, entradaAltura) <= 39.9) {
                estilo(corAcerto);
                resultado(`Seu IMC é ${getImc(entradaPeso, entradaAltura)} (OBESIDADE GRAU 2!!)`);
            } else if (getImc(entradaPeso, entradaAltura) >= 40) {
                estilo(corAcerto);
                resultado(`Seu IMC é ${getImc(entradaPeso, entradaAltura)} (OBESIDADE GRAU 3!!!)`);
            }
        }
        limpeza(entradaPeso, entradaAltura, '');
    });
}
meuEscopo();
