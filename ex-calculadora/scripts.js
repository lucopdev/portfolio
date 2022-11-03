// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),




//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//             this.pressionaEsc();
//             this.focarNoDisplay();
//         },
//         focarNoDisplay() {
//             document.addEventListener('click', function () {
//                 this.display.focus();
//             }.bind(this));
//         },
//         pressionaEnter() {
//             this.display.addEventListener('keyup', function (e) {
//                 if (e.keyCode === 13) {
//                     this.resultado();
//                 }
//             }.bind(this));
//         },
//         pressionaEsc() {
//             document.addEventListener('keydown', function (e) {
//                 if (e.keyCode === 27) {
//                     this.limpaDisplay();
//                 }
//             }.bind(this));
//         },
//         cliqueBotoes() {
//             document.addEventListener('click', function (e) {
//                 const elemento = e.target;

//                 if (elemento.classList.contains('btn-num')) {
//                     this.enviarBtnParaDisplay(elemento.innerText);
//                 }
//                 if (elemento.classList.contains('btn-clear')) {
//                     this.limpaDisplay();
//                 }
//                 if (elemento.classList.contains('btn-del')) {
//                     this.apagarValor();
//                 }
//                 if (elemento.classList.contains('btn-eq')) {
//                     this.resultado();
//                 }
//             }.bind(this));
//         },
//         enviarBtnParaDisplay(valor) {
//             this.display.value += valor;
//         },
//         limpaDisplay() {
//             this.display.value = '';
//         },
//         apagarValor() {
//             this.display.value = this.display.value.slice(0, -1);
//         },
//         resultado() {
//             let resposta = this.display.value;

//             try {
//                 resposta = eval(resposta);

//                 if (!resposta) {
//                     this.display.value = 'Conta inválida';
//                     console.log(resposta);
//                     return;
//                 }

//                 this.display.value = String(resposta);
//             } catch (e) {
//                 this.display.value = 'Conta inválida';
//                 return;
//             }
//         },
//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();


// document.addEventListener('keydown', function (btn) {
//     const tc = btn.code;
//     console.log(tc);
// })

function Calculadora() {
    const display = document.querySelector('.display');
    display.focus();


    this.inicio = function () {
        this.clicarBotoes();
        this.teclaEnter();
        this.teclaEsc();
        this.teclaSpace();
    };


    this.teclaSpace = function () {
        document.addEventListener('keydown', function (e) {
            if(e.code === 'Space'){
                this.botaoLimpar();
            }
        }.bind(this));
    };
    this.teclaEnter = function () {
        display.addEventListener('keyup', function (e) {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                this.botaoResultado();
            }
        }.bind(this));
    };
    this.teclaEsc = function () {
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                this.botaoLimpar();
            }
        }.bind(this));
    }

    this.clicarBotoes = function () {
        document.addEventListener('click', function (e) {
            let elemento = e.target.innerText;
            display.focus();

            if (e.target.classList.contains('btn-num')) {
                this.mostrarNoDisplay(elemento);
            }
            if (e.target.classList.contains('btn-clear')) {
                this.botaoLimpar();
            }
            if (e.target.classList.contains('btn-del')) {
                this.botaoApagarNum();
            }
            if (e.target.classList.contains('btn-eq')) {
                this.botaoResultado();
            }
        }.bind(this));
    };
    this.mostrarNoDisplay = function (valor) {
        display.value += valor;
    };
    this.botaoLimpar = function () {
        display.value = '';
    };
    this.botaoApagarNum = function () {
        display.value = display.value.slice(0, -1);
    };
    this.botaoResultado = function () {
        let resposta = display.value;

        try {
            resposta = eval(resposta);
            if (!resposta) {
                display.value = '';
            } else {
                display.value = resposta;
            }

        } catch (error) {
            display.value = 'Conta inválida!';
            return;
        }

    };
}
const calc = new Calculadora();
calc.inicio();