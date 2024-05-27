const preguntas = [
    {
        pregunta: "¿Quién ganó el Balón de Oro en 2023?",
        opciones: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Kylian Mbappé"],
        respuesta: "Lionel Messi"
    },
    {
        pregunta: "¿Qué equipo ganó la Champions League en 2023?",
        opciones: ["Manchester City", "Real Madrid", "Chelsea", "Bayern Múnich"],
        respuesta: "Manchester City"
    },
    {
        pregunta: "¿Quién fue el máximo goleador de la Premier League 2023?",
        opciones: ["Erling Haaland", "Harry Kane", "Mohamed Salah", "Jamie Vardy"],
        respuesta: "Erling Haaland"
    }
];

let puntaje = 0;
let preguntaActual = 0;

const juegoDiv = document.getElementById('juego');
const preguntaDiv = document.getElementById('pregunta');
const opcionesDiv = document.getElementById('opciones');
const siguienteBtn = document.getElementById('siguiente');
const resultadoDiv = document.getElementById('resultado');
const puntajeP = document.getElementById('puntaje');

function mostrarPregunta() {
    const preguntaObj = preguntas[preguntaActual];
    preguntaDiv.textContent = preguntaObj.pregunta;
    opcionesDiv.innerHTML = '';

    preguntaObj.opciones.forEach(opcion => {
        const opcionBtn = document.createElement('button');
        opcionBtn.textContent = opcion;
        opcionBtn.addEventListener('click', () => verificarRespuesta(opcion));
        opcionesDiv.appendChild(opcionBtn);
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const preguntaObj = preguntas[preguntaActual];
    if (opcionSeleccionada === preguntaObj.respuesta) {
        puntaje++;
    }
    siguienteBtn.style.display = 'block';
}

siguienteBtn.addEventListener('click', () => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
        siguienteBtn.style.display = 'none';
    } else {
        juegoDiv.style.display = 'none';
        resultadoDiv.style.display = 'block';
        puntajeP.textContent = `Tu puntaje final es: ${puntaje} de ${preguntas.length}`;
    }
});

mostrarPregunta();








// let continuar = true

// while(continuar == true){
//     let numeroUno = parseFloat(prompt("Ingrese un numero"))
//     let numeroDos = parseFloat(prompt("Ingrese otro numero"))
//     let operacion = prompt("Ingrese una operacion (sum,res,div,mul)")
//     let resultado = 0

//     if(operacion == "sum"){
//         resultado = numeroUno + numeroDos
//     } else if(operacion == "res"){
//         resultado = numeroUno - numeroDos
//     }else if (operacion == "mul"){
//         resultado = numeroUno * numeroDos
//     }else if (operacion == "div"){
//         if(numeroDos == 0){
//             resultado = "No se puede dividir por 0"
//         }else{
//             resultado = numeroUno / numeroDos
//         }
        
//     }else{
//         resultado ="Error"
//     }

//     alert("Resultado: " + resultado)
//     continuar = confirm("Quiere seguir haciendo operaciones")
// }