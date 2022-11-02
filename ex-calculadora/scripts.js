function criaCalculadora() {
    return {
        display: document.querySelector('.display'),




        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaEsc();
            this.focarNoDisplay();
        },
        focarNoDisplay() {
            document.addEventListener('click', function () {
                this.display.focus();
            }.bind(this));
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', function (e) {
                if (e.keyCode === 13) {
                    this.resultado();
                }
            }.bind(this));
        },
        pressionaEsc() {
            document.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    this.limpaDisplay();
                }
            }.bind(this));
        },
        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.enviarBtnParaDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                }
                if (elemento.classList.contains('btn-del')) {
                    this.apagarValor();
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.resultado();
                }
            }.bind(this));
        },
        enviarBtnParaDisplay(valor) {
            this.display.value += valor;
        },
        limpaDisplay() {
            this.display.value = '';
        },
        apagarValor() {
            this.display.value = this.display.value.slice(0, -1);
        },
        resultado() {
            let resposta = this.display.value;

            try {
                resposta = eval(resposta);

                if (!resposta) {
                    this.display.value = 'Conta inválida';
                    console.log(resposta);
                    return;
                }

                this.display.value = String(resposta);
            } catch (e) {
                this.display.value = 'Conta inválida';
                return;
            }
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();