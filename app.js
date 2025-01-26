let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`EL doble de ${numeroDeUsuario} es: ${numeroDeUsuario * 2}`);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `<span style="color: green;">Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}</span>`);
        activarDesactivarBotones('reiniciar', 'intentarBoton');
        /*document.getElementById('reiniciar').removeAttribute('disabled');
        desactivar = document.querySelector('#intentarBoton');
        desactivar.setAttribute('disabled','true');*/
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es <span style="color: red;">menor</span>');
        } else {
            asignarTextoElemento('p', 'El número secreto es <span style="color: red;">mayor</span>');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function saludo(){
    console.log('Hola mundo');
}

function nuevoJuego(){
    
    limpiarCaja();
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log(`El nuevo numero secreto es: ${numeroSecreto}`);
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    activarDesactivarBotones('intentarBoton', 'reiniciar');
    /*document.getElementById('intentarBoton').removeAttribute('disabled');
    desactivar = document.getElementById('reiniciar');
    desactivar.setAttribute('disabled','true');*/
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
} 

function activarDesactivarBotones (elementoHTMLAct, elementoHTMLDes){
    
    //desactivar boton
    desactivar = document.getElementById(elementoHTMLDes);
    desactivar.setAttribute('disabled','true'); 
    
    //activar boton
    document.getElementById(elementoHTMLAct).removeAttribute('disabled');
}



console.log(`El numero secreto es: ${numeroSecreto}`);
asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 10');



/*
function nuevoJuego(){
    let numeroUsuario1 = parseInt(prompt(`Pon el primero numero para promediar`));
    let numeroUsuario2 = parseInt(prompt(`Pon el segundo numero para promediar`));
    let numeroUsuario3 = parseInt(prompt(`Pon el tercer numero para promediar`));
    let parrafo = document.getElementById('parrafo1');
    //console.log(typeof(parrafo));
    //parrafo = parseInt(parrafo);
    console.log(`EL promedio de ${numeroUsuario1}, ${numeroUsuario2}, ${numeroUsuario3} es: ${(prom = (numeroUsuario1+numeroUsuario2+numeroUsuario3)/3)}`);
    let promLimitado = prom.toFixed(0);
    parrafo.innerHTML = `El promedio es: <span style="color: yellow;">${promLimitado}</span>`;

    if (numeroUsuario1 > numeroUsuario2){
        console.log(`El número ${numeroUsuario1} es el más grande`);
    } else if (numeroUsuario2 > numeroUsuario3){
        console.log(`El número ${numeroUsuario2} es el más grande`);
    } else {
        console.log(`El número ${numeroUsuario3} es el más grande`)
    }
}
*/