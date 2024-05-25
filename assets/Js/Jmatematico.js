/*var num1, num2, respuesta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 1 9
	num1 = Math.round(Math.random()*100);
	num2 = Math.round(Math.random()*100);
	respuesta = num1 + num2;
	//asignamos lo números para que se muestren
	suma.innerHTML = num1 + " + " + num2 + " = ";

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
}

function controlarRespuesta(opcionElegida){	

	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color="white";
		setTimeout(comenzar, 2000);
	}else{
		txt_msj.innerHTML = "INTENTA DE NUEVO!!";
		txt_msj.style.color="white";
		setTimeout(limpiar, 2000);

	}
}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();

*/


// Variables globales
let num1, num2, num3, num4, respuesta;
let txtOperacion, txtResultado, txtMsj, op1, op2, op3, modoSeleccionado;

document.addEventListener('DOMContentLoaded', () => {
    txtOperacion = document.getElementById("operacion");
    op1 = document.getElementById("op1");
    op2 = document.getElementById("op2");
    op3 = document.getElementById("op3");
    txtMsj = document.getElementById("msj");
    txtResultado = document.getElementById("resultado");

    // Ocultar el contenedor del juego al cargar
    document.querySelector('#contenedor-juego').style.display = 'none';
});

function seleccionarModo(modo) {
    modoSeleccionado = modo;
    document.querySelector('.menu-seleccion').style.display = 'none';
    document.querySelector('#contenedor-juego').style.display = 'block';
    comenzar();
}

function comenzar() {
    txtResultado.innerHTML = "?";
    txtMsj.innerHTML = "";

    generarOperacion(modoSeleccionado);

    // Colocar opciones en posiciones aleatorias
    const indiceOpCorrecta = Math.floor(Math.random() * 3);
    const opciones = [op1, op2, op3];

    opciones.forEach((opcion, index) => {
        if (index === indiceOpCorrecta) {
            opcion.innerHTML = respuesta;
        } else {
            opcion.innerHTML = generarOpcionIncorrecta(respuesta);
        }
    });
}

function generarOperacion(modo) {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    num3 = Math.floor(Math.random() * 10) + 1;
    num4 = Math.floor(Math.random() * 10) + 1;

    switch (modo) {
        case 'suma':
            respuesta = num1 + num2;
            txtOperacion.innerHTML = `${num1} + ${num2} = `;
            break;
        case 'resta':
            respuesta = num1 - num2;
            txtOperacion.innerHTML = `${num1} - ${num2} = `;
            break;
        case 'multiplicacion':
            respuesta = num1 * num2;
            txtOperacion.innerHTML = `${num1} x ${num2} = `;
            break;
        case 'division':
            while (num2 === 0) {
                num2 = Math.floor(Math.random() * 10) + 1;
            }
            respuesta = Math.floor(num1 / num2);
            txtOperacion.innerHTML = `${num1} / ${num2} = `;
            break;
        case 'combinadas':
            generarOperacionCombinada();
            break;
    }
}

function generarOperacionCombinada() {
    const operadores = ['+', '-', '*', '/'];
    let intento = 0;
    let operador1, operador2, operador3;
    let expresion, resultado;

    do {
        intento++;
        operador1 = operadores[Math.floor(Math.random() * operadores.length)];
        operador2 = operadores[Math.floor(Math.random() * operadores.length)];
        operador3 = operadores[Math.floor(Math.random() * operadores.length)];

        expresion = `${num1} ${operador1} ${num2} ${operador2} ${num3} ${operador3} ${num4}`;
        resultado = eval(expresion.replace(/\/\s*0/g, '/1')); // Reemplazar división por cero con división por uno
    } while (!Number.isInteger(resultado) && intento < 100);

    if (intento >= 100) {
        // Si no se puede generar una operación válida después de 100 intentos, volver a intentar
        generarOperacionCombinada();
    } else {
        respuesta = resultado;
        txtOperacion.innerHTML = `${expresion} = `;
    }
}

function generarOpcionIncorrecta(correcta) {
    let incorrecta;
    do {
        incorrecta = correcta + Math.floor(Math.random() * 10) - 5;
    } while (incorrecta === correcta || incorrecta < 0);
    return incorrecta;
}

function controlarRespuesta(opcionElegida) {
    const respuestaUsuario = parseInt(opcionElegida.innerHTML, 10);
    txtResultado.innerHTML = respuestaUsuario;

    if (respuestaUsuario === respuesta) {
        txtMsj.innerHTML = "¡EXCELENTE!";
        txtMsj.style.color = "white";
        setTimeout(comenzar, 2000);
    } else {
        txtMsj.innerHTML = "¡INTENTA DE NUEVO!";
        txtMsj.style.color = "white";
        setTimeout(limpiar, 2000);
    }
}

function limpiar() {
    txtResultado.innerHTML = "?";
    txtMsj.innerHTML = "";
}











