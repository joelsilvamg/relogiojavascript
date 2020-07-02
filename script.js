/*
    Fontes:
    https://www.youtube.com/watch?v=TMY31XPyKGQ
    https://www.youtube.com/watch?v=pGdTiqV86VI
*/

function relogio(){
    var data = new Date();

    var horas = window.document.getElementById('hour');
    var minutos = window.document.getElementById('minute');
    var segundos = window.document.getElementById('second');

    if(data.getHours() < 10){
        horas.innerHTML = "0" + data.getHours();
    }else{
        horas.innerHTML = data.getHours();
    }

    if(data.getMinutes() < 10){
        minutos.innerHTML = "0" + data.getMinutes();
    }else{
        minutos.innerHTML = data.getMinutes();
    }

    if(data.getSeconds() < 10){
        segundos.innerHTML = "0" + data.getSeconds();
    }else{
        segundos.innerHTML = data.getSeconds();
    }

}
setInterval(relogio,500);