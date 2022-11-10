function limpar(){
    window.document.querySelector('input#inicio').value='';
    window.document.querySelector('input#fim').value='';
    window.document.querySelector('input#passo').value='';
    let saida = window.document.querySelector('div#saida');
    saida.innerText='';
    
    
} //NÃO ESTÁ FUNCIONANDO AINDA
function contar(){
    let inicial = window.document.querySelector('input#inicio');
    let final = window.document.querySelector('input#fim');
    let passagem = window.document.querySelector('input#passo');
    let saida = window.document.querySelector('div#saida');
   
 

    if(inicial.value.length == 0 || final.value.length == 0 || 
        passagem.value.length == 0 || passagem.value == 0){
       saida.innerHTML=('Verifique os dados e tente novamente.');
       
    }else{
            let nInicio = Number(inicial.value);
            let nFim = Number(final.value);
            let nPasso = Number(passagem.value);
            let res = '';
            /*cuidar o escopo*/
        
            if(nInicio < nFim){
                for(let c=nInicio; c<=nFim; c+=nPasso){
                    res = res + ' ' + c; 
                }
                saida.innerHTML=(res);  
                
            }if(nInicio > nFim){
                for(let i=nInicio; i>=nFim; i-=nPasso){
                    res = res + ' ' + i; 
                }
                saida.innerHTML=(res);  
               
            }
           
            
            
        
    }
    
}
