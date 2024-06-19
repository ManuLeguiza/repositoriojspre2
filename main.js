
        import { cargarPreguntas } from './preguntas.js';

        class JuegoDePreguntas {
            constructor(preguntas) {
                this.preguntas = preguntas;
                this.puntaje = 0;
                this.preguntaActual = 0;
                
                this.juegoDiv = document.getElementById('juego');
                this.preguntaDiv = document.getElementById('pregunta');
                this.opcionesDiv = document.getElementById('opciones');
                this.siguienteBtn = document.getElementById('siguiente');
                this.resultadoDiv = document.getElementById('resultado');
                this.puntajeP = document.getElementById('puntaje');

                this.siguienteBtn.addEventListener('click', this.siguientePregunta.bind(this));
                
                this.mostrarPregunta();
            }

            mostrarPregunta() {
                const { pregunta, opciones } = this.preguntas[this.preguntaActual];
                this.preguntaDiv.textContent = pregunta;
                this.opcionesDiv.innerHTML = '';

                opciones.forEach(opcion => {
                    const opcionBtn = document.createElement('button');
                    opcionBtn.textContent = opcion;
                    opcionBtn.addEventListener('click', () => this.verificarRespuesta(opcion));
                    this.opcionesDiv.appendChild(opcionBtn);
                });
            }

            verificarRespuesta(opcionSeleccionada) {
                const { respuesta } = this.preguntas[this.preguntaActual];
                if (opcionSeleccionada === respuesta) {
                    this.puntaje++;
                }
                this.siguienteBtn.style.display = 'block';
            }

            siguientePregunta() {
                this.preguntaActual++;
                if (this.preguntaActual < this.preguntas.length) {
                    this.mostrarPregunta();
                    this.siguienteBtn.style.display = 'none';
                } else {
                    this.mostrarResultado();
                }
            }

            mostrarResultado() {
                this.juegoDiv.style.display = 'none';
                this.resultadoDiv.style.display = 'block';
                this.puntajeP.textContent = `Tu puntaje final es: ${this.puntaje} de ${this.preguntas.length}`;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            cargarPreguntas('preguntas.json')
                .then(preguntas => {
                    if (preguntas.length > 0) {
                        new JuegoDePreguntas(preguntas);
                    } else {
                        console.error("No se encontraron preguntas en el archivo JSON.");
                    }
                });
        });







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