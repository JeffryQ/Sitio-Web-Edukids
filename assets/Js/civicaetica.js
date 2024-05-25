const questions = {
    facil: [
        { 
            question: "¿Cuál es el color de la bandera de Guatemala?", 
            options: ["Azul y blanco", "Rojo y blanco", "Verde y amarillo"], 
            answer: "Azul y blanco" 
        },
        { 
            question: "¿Qué animal está representado en el escudo de Guatemala?", 
            options: ["Quetzal", "Jaguar", "Mono"], 
            answer: "Quetzal" 
        },
        { 
            question: "¿Qué significa decir 'por favor' al pedir algo?", 
            options: ["Mostrar educación y cortesía", "Pedir algo con insistencia", "Ignorar a los demás"], 
            answer: "Mostrar educación y cortesía" 
        },
        { 
            question: "¿Cómo debes comportarte en la mesa durante una comida?", 
            options: [
                "Sentarse correctamente, usar los cubiertos adecuadamente y no hablar con la boca llena", 
                "Saltar sobre la mesa y jugar con la comida", 
                "Ignorar a los demás y comer rápidamente"
            ], 
            answer: "Sentarse correctamente, usar los cubiertos adecuadamente y no hablar con la boca llena" 
        },
        { 
            question: "¿Cuál es la forma apropiada de dirigirse a una persona mayor?", 
            options: ["Señor o señora seguido de su apellido", "Hola tú", "Amigo"], 
            answer: "Señor o señora seguido de su apellido" 
        },
        { 
            question: "¿Qué debes hacer si te equivocas?", 
            options: ["Admitir el error y disculparte", "Echarle la culpa a otra persona", "Ignorar el error"], 
            answer: "Admitir el error y disculparte" 
        },
        { 
            question: "¿Cuál es el día de la independencia de Guatemala?", 
            options: ["15 de septiembre", "10 de octubre", "20 de noviembre"], 
            answer: "15 de septiembre" 
        },
        { 
            question: "¿Qué debes hacer al saludar a alguien que acabas de conocer?", 
            options: ["Dar la mano y decir 'mucho gusto'", "Dar un abrazo fuerte", "No saludar"], 
            answer: "Dar la mano y decir 'mucho gusto'" 
        },
        { 
            question: "¿Por qué es importante decir 'gracias'?", 
            options: ["Para mostrar aprecio y reconocimiento", "Para criticar a alguien", "Para molestar a los demás"], 
            answer: "Para mostrar aprecio y reconocimiento" 
        },
        { 
            question: "¿Cuál es la capital de Guatemala?", 
            options: ["Ciudad de Guatemala", "Quetzaltenango", "Antigua Guatemala"], 
            answer: "Ciudad de Guatemala" 
        }
    ],
    medio: [
        { 
            question: "¿Cuál es el sistema de gobierno de Guatemala?", 
            options: ["República democrática", "Monarquía absoluta", "Dictadura"], 
            answer: "República democrática" 
        },
        { 
            question: "¿Qué significa ser respetuoso con el medio ambiente?", 
            options: ["Cuidar la naturaleza y no contaminar", "Tirar basura en la calle", "Destruir los árboles"], 
            answer: "Cuidar la naturaleza y no contaminar" 
        },
        { 
            question: "¿Qué debes hacer si ves a alguien en peligro?", 
            options: ["Buscar ayuda de un adulto o llamar a los servicios de emergencia", "Ignorar la situación", "Tomar fotos"], 
            answer: "Buscar ayuda de un adulto o llamar a los servicios de emergencia" 
        },
        { 
            question: "¿Cuál es la importancia de la educación en la sociedad guatemalteca?", 
            options: ["Permite el desarrollo personal y el progreso del país", "No es importante", "Solo para algunos"], 
            answer: "Permite el desarrollo personal y el progreso del país" 
        },
        { 
            question: "¿Por qué es importante respetar las diferencias entre las personas?", 
            options: [
                "Porque todos merecen ser tratados con dignidad y respeto, independientemente de sus diferencias", 
                "Para discriminar a los demás", 
                "Para ser malos"
            ], 
            answer: "Porque todos merecen ser tratados con dignidad y respeto, independientemente de sus diferencias" 
        },
        { 
            question: "¿Qué significa la palabra 'solidaridad'?", 
            options: ["Significa apoyar a los demás en tiempos difíciles", "No significa nada", "Es para débiles"], 
            answer: "Significa apoyar a los demás en tiempos difíciles" 
        },
        { 
            question: "¿Cuál es el significado de la palabra 'tolerancia'?", 
            options: ["Respetar las opiniones y creencias de los demás", "Ser intolerante", "Ignorar a los demás"], 
            answer: "Respetar las opiniones y creencias de los demás" 
        },
        { 
            question: "¿Qué debes hacer si encuentras un objeto perdido?", 
            options: ["Entregarlo a una autoridad o buscar al dueño para devolverlo", "Guardarlo para ti", "Tirarlo a la basura"], 
            answer: "Entregarlo a una autoridad o buscar al dueño para devolverlo" 
        },
        { 
            question: "¿Por qué es importante seguir las reglas de la sociedad?", 
            options: ["Para mantener el orden y la convivencia pacífica entre las personas", "Para hacer lo que quieras", "Para romperlas"], 
            answer: "Para mantener el orden y la convivencia pacífica entre las personas" 
        },
        { 
            question: "¿Cuál es el deber principal de un ciudadano en una democracia?", 
            options: ["Participar en las elecciones y respetar las leyes", "No hacer nada", "Romper las leyes"], 
            answer: "Participar en las elecciones y respetar las leyes" 
        }
    ],
    dificil: [
        { 
            question: "¿Qué papel juegan los medios de comunicación en una sociedad democrática?", 
            options: [
                "Informar a la población, promover la libertad de expresión y fiscalizar al gobierno",
                "Divulgar noticias falsas y desinformar a la población",
                "Promover la violencia y el odio"
                ],
                answer: "Informar a la población, promover la libertad de expresión y fiscalizar al gobierno"
                },
                {
                question: "¿Qué acciones pueden tomar los ciudadanos para combatir la corrupción en Guatemala?",
                options: [
                "Denunciar casos de corrupción, exigir transparencia en el gobierno y participar en movimientos anticorrupción",
                "Ignorar la corrupción",
                "Participar en la corrupción"
                ],
                answer: "Denunciar casos de corrupción, exigir transparencia en el gobierno y participar en movimientos anticorrupción"
                },
                {
                question: "¿Cuál es la importancia de la justicia en una sociedad democrática?",
                options: [
                "Garantiza la igualdad de todos ante la ley y protege los derechos de los ciudadanos",
                "No tiene importancia",
                "Permite la discriminación"
                ],
                answer: "Garantiza la igualdad de todos ante la ley y protege los derechos de los ciudadanos"
                },
                {
                question: "¿Qué significa ser un consumidor responsable?",
                options: [
                "Comprar productos que sean éticos y respetuosos con el medio ambiente, y evitar el desperdicio",
                "Comprar productos sin importar su origen",
                "No importa ser responsable"
                ],
                answer: "Comprar productos que sean éticos y respetuosos con el medio ambiente, y evitar el desperdicio"
                },
                {
                question: "¿Cuál es el significado de la palabra 'empatía' y por qué es importante?",
                options: [
                "La empatía es ponerse en el lugar del otro y entender sus sentimientos. Es importante para fortalecer las relaciones interpersonales y promover la comprensión",
                "La empatía significa no preocuparse por los demás",
                "La empatía es para débiles"
                ],
                answer: "La empatía es ponerse en el lugar del otro y entender sus sentimientos. Es importante para fortalecer las relaciones interpersonales y promover la comprensión"
                },
                {
                question: "¿Cuáles son los derechos fundamentales de los niños en Guatemala?",
                options: [
                "Derecho a la educación, a la salud, a la protección contra el maltrato y la explotación, entre otros",
                "No tienen derechos",
                "Solo algunos tienen derechos"
                ],
                answer: "Derecho a la educación, a la salud, a la protección contra el maltrato y la explotación, entre otros"
                },
                {
                question: "¿Por qué es importante la participación ciudadana en la vida política?",
                options: [
                "Porque fortalece la democracia y asegura que el gobierno represente los intereses de la población",
                "No tiene importancia",
                "Para causar conflictos"
                ],
                answer: "Porque fortalece la democracia y asegura que el gobierno represente los intereses de la población"
                },
                {
                question: "¿Cuál es la importancia de la diversidad cultural en Guatemala?",
                options: [
                "Enriquece nuestra sociedad al traer diferentes perspectivas, tradiciones y experiencias",
                "No tiene importancia",
                "Para dividir a la sociedad"
                ],
                answer: "Enriquece nuestra sociedad al traer diferentes perspectivas, tradiciones y experiencias"
                },
                {
                question: "¿Qué acciones pueden tomar los niños para cuidar el medio ambiente en su comunidad?",
                options: [
                "Reciclar, ahorrar energía, plantar árboles y participar en actividades de limpieza",
                "No hacer nada",
                "Contaminar más"
                ],
                answer: "Reciclar, ahorrar energía, plantar árboles y participar en actividades de limpieza"
                },
                {
                question: "¿Cuál es la importancia de la educación cívica en la formación de los ciudadanos?",
                options: [
                "Les enseña sobre sus derechos y responsabilidades, y los prepara para participar activamente en la sociedad",
                "No es importante",
                "Para causar conflictos"
                ],
                answer: "Les enseña sobre sus derechos y responsabilidades, y los prepara para participar activamente en la sociedad"
                }
                ]
                };

let currentLevel;
    let currentQuestionIndex;
    let score;
    
    function startGame(level) {
        currentLevel = level;
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('start').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        showQuestion();
    }
    
    function showQuestion() {
        const questionObj = questions[currentLevel][currentQuestionIndex];
        document.getElementById('question').textContent = questionObj.question;
        document.getElementById('result').textContent = ""; // Limpiar anuncio de respuesta anterior
    
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        questionObj.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option === questionObj.answer);
            optionsContainer.appendChild(button);
        });
    }
    
    function checkAnswer(correct) {
        if (correct) {
            document.getElementById('result').textContent = "¡Correcto!";
            score++;
        } else {
            document.getElementById('result').textContent = "Incorrecto";
        }
    }
    
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[currentLevel].length) {
            showQuestion();
        } else {
            endGame();
        }
    }
    
    function endGame() {
        const finalScoreElement = document.createElement('p');
        finalScoreElement.id = 'final-score';
        finalScoreElement.textContent = `Puntaje final: ${score}/${questions[currentLevel].length}`;
        document.getElementById('game').style.display = 'none';
        document.getElementById('start').style.display = 'block';
        document.getElementById('start').appendChild(finalScoreElement);
    }
