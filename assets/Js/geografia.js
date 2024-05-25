const questions = {
    facil: [
        { question: "¿Cuál es la capital de España?", options: ["Madrid", "Barcelona", "Lisboa"], answer: "Madrid" },
        { question: "¿Cuál es la capital de Francia?", options: ["Madrid", "París", "Londres"], answer: "París" },
        { question: "¿Cuál es la capital de Italia?", options: ["Roma", "Madrid", "Berlín"], answer: "Roma" },
        { question: "¿Cuál es la capital de Argentina?", options: ["Buenos Aires", "Santiago", "Brasilia"], answer: "Buenos Aires" },
        { question: "¿Cuál es la capital de México?", options: ["Ciudad de México", "Bogotá", "Lima"], answer: "Ciudad de México" },
        { question: "¿Cuál es la capital de Colombia?", options: ["Buenos Aires", "Santiago", "Bogotá"], answer: "Bogotá" },
        { question: "¿Cuál es la capital de Brasil?", options: ["Sao Paulo", "Brasilia", "Río de Janeiro"], answer: "Brasilia" },
        { question: "¿Cuál es la capital de Chile?", options: ["Lima", "Santiago", "Bogotá"], answer: "Santiago" },
        { question: "¿Cuál es la capital de Perú?", options: ["Santiago", "Lima", "Bogotá"], answer: "Lima" },
        { question: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Ottawa", "Vancouver"], answer: "Ottawa" }
    ],
    medio: [
        { question: "¿Cuál es la capital de Alemania?", options: ["Roma", "Madrid", "Berlín"], answer: "Berlín" },
        { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Canberra"], answer: "Canberra" },
        { question: "¿Cuál es la capital de China?", options: ["Pekín", "Shanghái", "Hong Kong"], answer: "Pekín" },
        { question: "¿Cuál es la capital de Rusia?", options: ["San Petersburgo", "Moscú", "Kiev"], answer: "Moscú" },
        { question: "¿Cuál es la capital de Sudáfrica?", options: ["Ciudad del Cabo", "Pretoria", "Johannesburgo"], answer: "Pretoria" },
        { question: "¿Cuál es la capital de India?", options: ["Nueva Delhi", "Bombay", "Calcuta"], answer: "Nueva Delhi" },
        { question: "¿Cuál es la capital de Turquía?", options: ["Estambul", "Ankara", "Esmirna"], answer: "Ankara" },
        { question: "¿Cuál es la capital de Corea del Sur?", options: ["Seúl", "Busan", "Incheon"], answer: "Seúl" },
        { question: "¿Cuál es la capital de España?", options: ["Madrid", "Barcelona", "Valencia"], answer: "Madrid" },
        { question: "¿Cuál es la capital de Francia?", options: ["Lyon", "París", "Niza"], answer: "París" }
    ],
    dificil: [
        { question: "¿Cuál es la capital de Japón?", options: ["Tokio", "Kioto", "Osaka"], answer: "Tokio" },
        { question: "¿Cuál es la capital de Noruega?", options: ["Estocolmo", "Oslo", "Copenhague"], answer: "Oslo" },
        { question: "¿Cuál es la capital de Islandia?", options: ["Reikiavik", "Oslo", "Helsinki"], answer: "Reikiavik" },
        { question: "¿Cuál es la capital de Nueva Zelanda?", options: ["Auckland", "Wellington", "Christchurch"], answer: "Wellington" },
        { question: "¿Cuál es la capital de Finlandia?", options: ["Helsinki", "Estocolmo", "Reikiavik"], answer: "Helsinki" },
        { question: "¿Cuál es la capital de Portugal?", options: ["Lisboa", "Oporto", "Madrid"], answer: "Lisboa" },
        { question: "¿Cuál es la capital de Suiza?", options: ["Ginebra", "Zúrich", "Berna"], answer: "Berna" },
        { question: "¿Cuál es la capital de Bélgica?", options: ["Amsterdam", "Bruselas", "Luxemburgo"], answer: "Bruselas" },
        { question: "¿Cuál es la capital de Austria?", options: ["Viena", "Salzburgo", "Innsbruck"], answer: "Viena" },
        { question: "¿Cuál es la capital de Kazajistán", options: ["Sau Paulo", "Canberra", "Estocolmo"], answer: "Astaná" },
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
