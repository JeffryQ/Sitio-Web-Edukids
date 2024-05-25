const questions = {
    easy: [
        { question: "¿Cómo se dice 'UNO' en inglés?", options: ["One", "Four", "Nine"], answer: "One" },
        { question: "¿Cuál es el color del cielo en inglés?", options: ["Blue", "Red", "Green"], answer: "Blue" },
        { question: "¿Qué animal dice 'miau' en inglés?", options: ["Cat", "Dog", "Bird"], answer: "Cat" },
        { question: "Completa la frase: 'I have a ___' (Tengo un/a ___)", options: ["Car", "Book", "House"], answer: "Book" },
        { question: "¿Cómo se dice 'dos' en inglés?", options: ["Two", "Three", "Five"], answer: "Two" },
        { question: "¿Cuál es el color del sol en inglés?", options: ["Yellow", "Orange", "Purple"], answer: "Yellow" },
        { question: "¿Qué animal dice 'woof' en inglés?", options: ["Dog", "Cat", "Cow"], answer: "Dog" },
        { question: "Completa la frase: 'I see a ___' (Veo un/a ___)", options: ["Car", "Dog", "Cat"], answer: "Cat" },
        { question: "¿Cómo se dice 'tres' en inglés?", "options": ["Three", "Four", "Six"], answer: "Three" },
        { question: "¿Cuál es el color de la hierba en inglés?", options: ["Green", "Brown", "Black"], answer: "Green" }
      ],
    
    medium: [
    { question: "¿Cómo se dice 'veinte' en inglés?", options: ["Twenty", "Thirty", "Fifty"], answer: "Twenty" },
    { question: "¿Cuál es el color del chocolate en inglés?", options: ["Brown", "Black", "White"], answer: "Brown" },
    { question: "¿Qué animal dice 'quack' en inglés?", options: ["Duck", "Cow", "Horse"], answer: "Duck" },
    { question: "Completa la frase: 'She has ___ apples' (Ella tiene ___ manzanas)", options: ["Three", "Five", "Two"], answer: "Two" },
    { question: "¿Cómo se dice 'cien' en inglés?", options: ["Hundred", "Thousand", "Fifty"], answer: "Hundred" },
    { question: "¿Cuál es el color del fuego en inglés?", options: ["Red", "Yellow", "Orange"], answer: "Red" },
    { question: "¿Qué animal dice 'neigh' en inglés?", options: ["Horse", "Cow", "Pig"], answer: "Horse" },
    { question: "Completa la frase: 'He is playing with ___' (Él está jugando con ___)", options: ["Ball", "Car", "Toy"], answer: "Toy" },
    { question: "¿Cómo se dice 'cincuenta' en inglés?", options: ["Fifty", "Twenty", "Hundred"], answer: "Fifty" },
    { question: "¿Cuál es el color del cielo al atardecer en inglés?", options: ["Orange", "Pink", "Purple"], answer: "Orange" }
    ],

    dificult: [
    { question: "¿Cómo se dice 'mil' en inglés?", options: ["Thousand", "Million", "Hundred"], answer: "Thousand" },
    { question: "¿Cuál es el color de la arena en inglés?", options: ["Sand", "Beige", "Brown"], answer: "Sand" },
    { question: "¿Qué animal dice 'hoot' en inglés?", options: ["Owl", "Eagle", "Falcon"], answer: "Owl" },
    { question: "Completa la frase: 'There are ___ pencils on the desk' (Hay ___ lápices en el escritorio)", options: ["Five", "Ten", "Three"], answer: "Five" },
    { question: "¿Cómo se dice 'diez mil' en inglés?", options: ["Ten thousand", "Hundred thousand", "Fifty thousand"], answer: "Ten thousand" },
    { question: "¿Cuál es el color del carbón en inglés?", options: ["Black", "Grey", "Dark"], answer: "Black" },
    { question: "¿Qué animal dice 'ribbit' en inglés?", options: ["Frog", "Lizard", "Turtle"], answer: "Frog" },
    { question: "Completa la frase: 'I bought ___ books yesterday' (Compré ___ libros ayer)", options: ["Five", "Three", "Two"], answer: "Two" },
    { question: "¿Cómo se dice 'un millón' en inglés?", options: ["Million", "Billion", "Thousand"], answer: "Million" },
    { question: "¿Cuál es el color de la luna en inglés?", options: ["Grey", "White", "Silver"], answer: "White" }
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

