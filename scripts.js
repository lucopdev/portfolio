const navigation = document.querySelector('.navi');
const botaoMenu = document.querySelector('#threeLineIcon');

botaoMenu.addEventListener('click', function(event){
    event.preventDefault();
    if(navigation.className === 'navi'){
        navigation.className = 'navi menuJs';
        botaoMenu.innerHTML = '&Cross;';
        console.log('true');
    }else{
        navigation.className = 'navi';
        botaoMenu.innerHTML = '&#9776;';
        console.log('false');
    }
    
});
