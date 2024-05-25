const questions = {
    facil: [
        { 
            question: "¿Cuál es el animal nacional de Estados Unidos?", 
            options: ["El águila calva", "El león", "El oso pardo"], 
            answer: "El águila calva" 
        },
        { 
            question: "¿Quién fue el autor de 'La Odisea'?", 
            options: ["Homero", "Virgilio", "Ovidio"], 
            answer: "Homero" 
        },
        { 
            question: "¿Cuántos huesos tiene el cuerpo humano adulto?", 
            options: ["206 huesos", "300 huesos", "150 huesos"], 
            answer: "206 huesos" 
        },
        { 
            question: "¿Quién pintó la 'Mona Lisa'?", 
            options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"], 
            answer: "Leonardo da Vinci" 
        },
        { 
            question: "¿Qué famoso personaje vive en una piña debajo del mar?", 
            options: ["Bob Esponja", "Patricio Estrella", "Calamardo"], 
            answer: "Bob Esponja" 
        },
        { 
            question: "¿Cuál es la capital de España?", 
            options: ["Madrid", "Barcelona", "Sevilla"], 
            answer: "Madrid" 
        },
        { 
            question: "¿Qué planeta es conocido como el 'planeta rojo'?", 
            options: ["Marte", "Venus", "Mercurio"], 
            answer: "Marte" 
        },
        { 
            question: "¿Cuál es el país más grande del mundo por área de tierra?", 
            options: ["Rusia", "Canadá", "China"], 
            answer: "Rusia" 
        },
        { 
            question: "¿Cuál es el río más largo del mundo?", 
            options: ["El río Amazonas", "El río Nilo", "El río Mississippi"], 
            answer: "El río Amazonas" 
        },
        { 
            question: "¿Quién fue el primer hombre en pisar la luna?", 
            options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"], 
            answer: "Neil Armstrong" 
        }
    ],
    medio: [
        { 
            question: "¿Cuál es el país más poblado del mundo?", 
            options: ["China", "India", "Estados Unidos"], 
            answer: "China" 
        },
        { 
            question: "¿Quién pintó 'La última cena'?", 
            options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"], 
            answer: "Leonardo da Vinci" 
        },
        { 
            question: "¿Cuál es el segundo planeta desde el sol en nuestro sistema solar?", 
            options: ["Venus", "Marte", "Júpiter"], 
            answer: "Venus" 
        },
        { 
            question: "¿Qué instrumento musical tocaba Wolfgang Amadeus Mozart?", 
            options: ["El piano", "El violín", "La guitarra"], 
            answer: "El piano" 
        },
        { 
            question: "¿Cuál es la capital de Canadá?", 
            options: ["Ottawa", "Toronto", "Montreal"], 
            answer: "Ottawa" 
        },
        { 
            question: "¿Quién escribió 'Orgullo y prejuicio'?", 
            options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë"], 
            answer: "Jane Austen" 
        },
        { 
            question: "¿Cuál es el elemento químico más abundante en la Tierra?", 
            options: ["El hierro", "El oxígeno", "El carbono"], 
            answer: "El hierro" 
        },
        { 
            question: "¿Cuál es la capital de Australia?", 
            options: ["Canberra", "Sídney", "Melbourne"], 
            answer: "Canberra" 
        },
        { 
            question: "¿Quién fue el primer presidente de Estados Unidos?", 
            options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"], 
            answer: "George Washington" 
        },
        { 
            question: "¿Cuál es el país más pequeño del mundo por área de tierra?", 
            options: ["El Vaticano", "Mónaco", "San Marino"], 
            answer: "El Vaticano" 
        }
    ],
    dificil: [
        { 
            question: "¿Qué poeta escribió 'Las flores del mal'?", 
            options: ["Charles Baudelaire", "Arthur Rimbaud", "Paul Verlaine"], 
            answer: "Charles Baudelaire" 
        },
        { 
            question: "¿Cuál es la montaña más alta del sistema solar?", 
            options: ["El Monte Olimpo", "El Everest", "El Kilimanjaro"], 
            answer: "El Monte Olimpo" 
        },
        { 
            question: "¿Qué país es conocido como 'El país de los mil lagos'?", 
            options: ["Finlandia", "Suecia", "Noruega"], 
            answer: "Finlandia" 
        },
        { 
            question: "¿Quién escribió la 'Divina Comedia'?", 
            options: ["Dante Alighieri", "Petrarca", "Giovanni Boccaccio"], 
            answer: "Dante Alighieri" 
        },
        { 
            question: "¿Cuál es el río más largo de Europa?", 
            options: ["El río Volga", "El río Danubio", "El río Rin"], 
            answer: "El río Volga" 
        },
        { 
            question: "¿Quién fue el primer presidente de la República de China?", 
            options: ["Sun Yat-sen", "Chiang Kai-shek", "Mao Zedong"], 
            answer: "Sun Yat-sen" 
        },
        { 
            question: "¿En qué año comenzó la Guerra de los Cien Años?", 
            options: ["1337", "1415", "1297"], 
            answer: "1337" 
        },
        { 
            question: "¿Cuál es el lago más profundo del mundo?", 
            options: ["El lago Baikal", "El lago Superior", "El lago Titicaca"], 
            answer: "El lago Baikal" 
        },
        { 
            question: "¿Quién escribió 'El proceso' y 'La metamorfosis'?", 
            options: ["Franz Kafka", "Fyodor Dostoevsky", "Albert Camus"], 
            answer: "Franz Kafka" 
        },
        { 
            question: "¿Qué científico propuso la teoría del Big Bang?", 
            options: ["Georges Lemaître", "Albert Einstein", "Stephen Hawking"], 
            answer: "Georges Lemaître" 
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

