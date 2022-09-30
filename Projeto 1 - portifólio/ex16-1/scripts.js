let valorDigitado = document.querySelector('input#numEnt');
let lista = document.querySelector('select#sel')
let respostaVisual = document.querySelector('div#saida');
let vetorNumeros = [];

function verificar1a100(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true;
    }else{
        return false;
    }
}

function verificarRepetidos(n, l){
    if(l.indexOf(n) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionarAoVetor(){
    respostaVisual.innerText='';

    if(verificar1a100(valorDigitado.value) && !verificarRepetidos(valorDigitado.value, vetorNumeros)){
        vetorNumeros.push(valorDigitado.value);
        let item = new Option(`O valor ${valorDigitado.value} foi adicionado.`)
            lista.add(item);     
    }else{
        alert('Número já existe ou é inválido');
    }
    valorDigitado.onfocus();
}

function finalizar(){
    if(vetorNumeros.length == 0){
        respostaVisual.innerHTML='<strong>Não existem valores para analisar.</strong>'
    }else{
        lista.innerText='';
        valorDigitado.onfocus();
        vetorNumeros.sort((a,b) => a-b);
        
        let maior = vetorNumeros.length-1;
        let soma = 0;
        let media = 0;
        
        for(let i in vetorNumeros){
            soma += Number(vetorNumeros[i]);
        }
        
        media = soma/vetorNumeros.length;

        respostaVisual.innerHTML =`<p>O vetor possui <strong>${vetorNumeros.length}</strong> números.</p>`;
        respostaVisual.innerHTML +=`<p>O menor número é ${vetorNumeros[0]}.</p>`;
        respostaVisual.innerHTML +=`<p>O maior número é ${vetorNumeros[maior]}.</p>`;
        respostaVisual.innerHTML +=`<p>A soma entre os valores é ${soma}.</p>`;
        respostaVisual.innerHTML +=`<p>A média entre os valores é ${media}.</p>`;

    }
}