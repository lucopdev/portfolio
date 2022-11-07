const divZap = document.querySelector('.divBotaoZap');
const icone = document.querySelector('.iconeZap');
const p = divZap.querySelector('p');

icone.addEventListener('mouseenter', function () {
   p.setAttribute('class', 'textoZap');
    console.log('criou o P');
});

icone.addEventListener('mouseout', function () {
    p.setAttribute('class', 'textoZapSumir');
    console.log('removeu o P');
});