function gerar(){
    let valEnt = window.document.querySelector('input#nEnt');
    let entNum = Number(valEnt.value);
    let select = document.querySelector('select#seletor');
    select.innerHTML = '';
    
    if(valEnt.value.length == 0){
        window.alert('Digite um número');
        }else{
            for(let i=1; i<=10; i++){
                let num = 1;
                num = entNum * i;

                let item = window.document.createElement('option');
                item.text = `${entNum} x ${i} = ${num}`; 
                item.value =`tab${i}`;
                select.appendChild(item);
            }
        }
}

