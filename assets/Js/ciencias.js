const questions = {
    facil: [
        { question: "¿Cuál es la capa más externa de la Tierra?", options: ["Corteza terrestre", "Manto", "Núcleo"], answer: "Corteza terrestre" },
        { question: "¿Qué animal es conocido como 'el rey de la selva'?", options: ["Tigre", "León", "Jaguar"], answer: "León" },
        { question: "¿Cuál es el proceso por el cual las plantas fabrican su propio alimento?", options: ["Fotosíntesis", "Respiración", "Transpiración"], answer: "Fotosíntesis" },
        { question: "¿Qué gas necesitan las plantas para realizar la fotosíntesis?", options: ["Oxígeno", "Dióxido de carbono (CO2)", "Nitrógeno"], answer: "Dióxido de carbono (CO2)" },
        { question: "¿Cuál es la principal función del corazón en el cuerpo humano?", options: ["Bombear sangre", "Producir hormonas", "Digestión de alimentos"], answer: "Bombear sangre" },
        { question: "¿Qué órgano del sistema respiratorio se encarga del intercambio de oxígeno y dióxido de carbono?", options: ["Pulmones", "Nariz", "Tráquea"], answer: "Pulmones" },
        { question: "¿Cómo se llama el proceso por el cual los organismos vivos se reproducen para dar lugar a descendientes similares?", options: ["Fecundación", "Reproducción", "Metamorfosis"], answer: "Reproducción" },
        { question: "¿Cuál es la fuerza natural que mantiene a los objetos en la superficie de la Tierra?", options: ["Gravedad", "Electromagnetismo", "Fuerza centrífuga"], answer: "Gravedad" },
        { question: "¿Qué animal es famoso por su camuflaje y se caracteriza por cambiar de color?", options: ["Cebra", "Camaleón", "Pulpo"], answer: "Camaleón" },
        { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Venus", "Mercurio", "Marte"], answer: "Mercurio" }
    ],
    medio: [
        { question: "¿Cuál es la unidad básica de la vida?", options: ["Célula", "Átomo", "Molécula"], answer: "Célula" },
        { question: "¿Qué tipo de célula carece de núcleo definido?", options: ["Procariota", "Eucariota", "Hepática"], answer: "Procariota" },
        { question: "¿Qué tipo de energía se produce a partir de la energía almacenada en los núcleos de los átomos?", options: ["Energía nuclear", "Energía térmica", "Energía cinética"], answer: "Energía nuclear" },
        { question: "¿Cómo se llama el proceso por el cual las plantas liberan oxígeno al ambiente?", options: ["Fotosíntesis", "Respiración", "Transpiración"], answer: "Fotosíntesis" },
        { question: "¿Qué tipo de fuerza mantiene unidos a los átomos en una molécula?", options: ["Fuerza electromagnética", "Fuerza gravitatoria", "Fuerza nuclear débil"], answer: "Fuerza electromagnética" },
        { question: "¿Cuál es el proceso por el cual el agua se convierte en vapor de agua?", options: ["Evaporación", "Condensación", "Solidificación"], answer: "Evaporación" },
        { question: "¿Qué nombre recibe la unidad básica de la herencia biológica?", options: ["Gen", "Alelo", "Cromosoma"], answer: "Gen" },
        { question: "¿Cuál es el animal más grande del planeta Tierra?", options: ["Elefante africano", "Ballena azul", "Gorila de montaña"], answer: "Ballena azul" },
        { question: "¿Qué tipo de animal es el koala?", options: ["Mamífero", "Reptil", "Ave"], answer: "Mamífero" },
        { question: "¿Cuál es el proceso por el cual el ADN se copia a sí mismo antes de la división celular?", options: ["Replicación del ADN", "Transcripción", "Traducción"], answer: "Replicación del ADN" }
    ],
    dificil: [
        { question: "¿Cuál es la teoría que explica el origen del universo a partir de una gran explosión?", options: ["Teoría de la expansión", "Teoría del Big Bang", "Teoría del caos"], answer: "Teoría del Big Bang" },
        { question: "¿Qué es la homeostasis en biología?", options: ["Equilibrio interno del cuerpo", "Regulación de la temperatura corporal", "Capacidad de adaptación"], answer: "Equilibrio interno del cuerpo" },
        { question: "¿Cuál es el proceso por el cual las células se vuelven especializadas en diferentes funciones?", options: ["Diferenciación celular", "Mitosis", "Meiosis"], answer: "Diferenciación celular" },
        { question: "¿Qué científico propuso la teoría de la evolución por selección natural?", options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur"], answer: "Charles Darwin" },
        { question: "¿Cuál es el nombre del proceso por el cual los organismos vivos toman energía del entorno para realizar sus funciones vitales?", options: ["Metabolismo", "Fotosíntesis", "Nutrición"], answer: "Nutrición" },
        { question: "¿Qué es la entropía en términos de la segunda ley de la termodinámica?", options: ["Medida del desorden en un sistema", "Cantidad de energía disponible", "Capacidad de realizar trabajo"], answer: "Medida del desorden en un sistema" },
        { question: "¿Cuál es el proceso por el cual las células se dividen para formar nuevas células?", options: ["Mitosis", "Meiosis", "Fotosíntesis"], answer: "Mitosis" },
        { question: "¿Qué es la mutación genética?", options: ["Cambio en la secuencia de ADN", "Intercambio genético entre especies", "Transformación celular maligna"], answer: "Cambio en la secuencia de ADN" },
        { question: "¿Cuál es la diferencia entre un ecosistema y una comunidad?", options: ["Un ecosistema incluye todos los seres vivos y no vivos en un área, mientras que una comunidad solo incluye los seres vivos.", "Un ecosistema es más grande que una comunidad.", "Una comunidad incluye todos los seres vivos y no vivos en un área, mientras que un ecosistema solo incluye los seres vivos."], answer: "Un ecosistema incluye todos los seres vivos y no vivos en un área, mientras que una comunidad solo incluye los seres vivos." },
        { question: "¿Qué es la biodiversidad y por qué es importante para los ecosistemas?", options: ["La biodiversidad es la variedad de vida en la Tierra, y es importante para mantener el equilibrio de los ecosistemas y proporcionar servicios ecológicos.", "La biodiversidad es la cantidad total de seres vivos en un área determinada.", "La biodiversidad es la variabilidad genética dentro de una especie."], answer: "La biodiversidad es la variedad de vida en la Tierra, y es importante para mantener el equilibrio de los ecosistemas y proporcionar servicios ecológicos." }
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
