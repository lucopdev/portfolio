    var agora = new Date();
    var dia = agora.getDay();
    var horas = agora.getHours();
    var minuto = agora.getMinutes();
    var diaMes = agora.getDate();
    var mes = agora.getMonth();
    var cumprimento = '';
    var img = window.document.getElementById('bomdia');
    
    window.setTimeout( function() {
        window.location.reload();
      }, 5000);

    function turno(){
        if(horas < 5){
                cumprimento = '<strong>Boa madrugada!</strong><br><br>';
                img.src = 'img/boamadrugada.jpg';
                document.body.style.backgroundColor = 'rgb(85, 80, 90)';
            }else if(horas < 12){
                cumprimento = '<strong>Bom dia!</strong><br><br>';
                img.src = 'img/bomdia.jpg';
                document.body.style.backgroundColor = 'rgb(116, 197, 214)';
            }else if(horas < 18){
                cumprimento = '<strong>Boa tarde!</strong><br><br>';
                img.src = 'img/boatarde.jpg';
                document.body.style.backgroundColor = 'rgb(219, 158, 101)';
            }else if(horas <= 24){
                cumprimento = '<strong>Boa noite!</strong><br><br>';
                img.src = 'img/boanoite.jpg';
                document.body.style.backgroundColor = 'rgb(140, 120, 140)';
            }   
            return cumprimento;
        }
        
        switch(dia){
            case 0: window.document.write(`${turno()} Hoje é ${'Domingo'}<br>`);
            break;
            case 1: window.document.write(`${turno()} Hoje é ${'Segunda-feira'}}<br>`);
            break;
            case 2: window.document.write(`${turno()} Hoje é ${'Terça-feira'}<br>`);
            break;
            case 3: window.document.write(`${turno()} Hoje é ${'Quarta-feira'}<br>`);
            break;
            case 4: window.document.write(`${turno()} Hoje é ${'Quinta-feira'}<br>`);
            break;
            case 5: window.document.write(`${turno()} Hoje é ${'Sexta-feira'}<br>`);
            break;
            case 6: window.document.write(`${turno()} Hoje é ${'Sábado'}<br>`);
            break;
        }

        switch(mes){
            case 0: document.write(`<br>Dia ${diaMes} de Janeiro`);
            break;
            case 1: document.write(`<br>Dia ${diaMes} de Fevereiro`);
            break;
            case 2: document.write(`<br>Dia ${diaMes} de Março`);
            break;
            case 3: document.write(`<br>Dia ${diaMes} de Abril`);
            break;
            case 4: document.write(`<br>Dia ${diaMes} de Maio`);
            break;
            case 5: document.write(`<br>Dia ${diaMes} de Junho`);
            break;
            case 6: document.write(`<br>Dia ${diaMes} de Julho`);
            break;
            case 7: document.write(`<br>Dia ${diaMes} de Agosto`);
            break;
            case 8: document.write(`<br>Dia ${diaMes} de Setembro`);
            break;
            case 9: document.write(`<br>Dia ${diaMes} de Outubro`);
            break;
            case 10: document.write(`<br>Dia ${diaMes} de Novembro`);
            break;
            case 11: document.write(`<br>Dia ${diaMes} de Dezembro`);
        }

        window.document.writeln(`<br><br><strong>Agora são ${horas} horas e ${minuto} minutos</strong>`);
        