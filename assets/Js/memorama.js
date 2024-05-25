
// Incicializacion de variables 
let tarjetasDestapadas = 0; 
let tarjetal = null;
let tarjeta2 = null;
let primerResultado =null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let timerInicial = 60;
let tiempoRegresivoId = null;

//apuntando a documento en html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos= document.getElementById('aciertos');
let mostrarTiempo= document.getElementById('t-restante');

// Generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; 
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
        }
    },1000);
}

function bloquearTarjetas(){
    for(let i=0;i<=15;i++){
        let tarjetaBloqueada =document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

// Funcion principal 
function destapar(id){ 

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
   // console.log(tarjetasDestapadas);
    
    if(tarjetasDestapadas == 1) { 
         // Mostrar primer numero
        tarjeta1 = document.getElementById(id); 
        primerResultado = numeros[parseInt(id)]; // Corrección aquí
        tarjeta1.innerHTML = primerResultado;
        //Deshabilitar primer boton 
        tarjeta1.disabled = true;

    }else if(tarjetasDestapadas ==2){
        // Mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[parseInt(id)]; // Corrección aquí
        tarjeta2.innerHTML = segundoResultado;
        // Deshabilitar segundo boton 
        tarjeta2.disabled = true;

        // Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `movimientos: ${movimientos}`;
        console.log("movimientos: ", movimientos);

        if(primerResultado == segundoResultado){
            //encerar contador de tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos==8){
                clearInterval(tiempoRegresivoId);
                mostrarTiempo.innerHTML=`solo demoraste ${timerInicial-timer} segundos`;
            }

        }else{
            //mostrar momentanemamente y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = ' '; // Corrección aquí
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false; // Corrección aquí
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
                console.log("------------probando------------");
            },500);
        }
    }
}
