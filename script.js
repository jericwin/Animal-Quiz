const questions = [
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: 1
    },
    {
      question: "Which animal is known as the 'ship of the desert'?",
      choices: ["Camel", "Horse", "Elephant", "Lion"],
      correctAnswer: 0
    },
    {
      question: "What is the fastest land animal?",
      choices: ["Cheetah", "Lion", "Gazelle", "Leopard"],
      correctAnswer: 0
    },
    {
      question: "What is the largest land animal?",
      choices: ["Elephant", "Giraffe", "Rhinoceros", "Hippopotamus"],
      correctAnswer: 0
    },
    {
      question: "What is the tallest animal in the world?",
      choices: ["Giraffe", "Elephant", "Camel", "Horse"],
      correctAnswer: 0
    },
    {
      question: "What is the only mammal capable of true flight?",
      choices: ["Bat", "Bird", "Butterfly", "Bee"],
      correctAnswer: 0
    },
    {
      question: "What is the largest cat species?",
      choices: ["Lion", "Tiger", "Leopard", "Cheetah"],
      correctAnswer: 1
    },
    {
      question: "What is the most venomous snake in the world?",
      choices: ["King Cobra", "Black Mamba", "Inland Taipan", "Rattlesnake"],
      correctAnswer: 2
    },
    {
      question: "What is the world's largest reptile?",
      choices: ["Anaconda", "Komodo Dragon", "Crocodile", "Alligator"],
      correctAnswer: 2
    },
    {
      question: "What is the largest bird in the world?",
      choices: ["Ostrich", "Eagle", "Emu", "Albatross"],
      correctAnswer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  const timePerQuestion = 10; 
  
  const startBtn = document.getElementById('start-btn');
  const quizContainer = document.getElementById('quiz');
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const feedbackElement = document.getElementById('feedback');
  const nextBtn = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const timerElement = document.getElementById('timer');
  
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      clearInterval(timer);
      startTimer();
      showQuestion();
    } else {
      clearInterval(timer);
      showResult();
    }
  });
  
  function startQuiz() {
    startBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
    startTimer();
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
      const choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choiceButton.addEventListener('click', () => checkAnswer(index));
      choicesElement.appendChild(choiceButton);
    });
    feedbackElement.textContent = '';
    nextBtn.classList.add('hidden');
  }
  
  function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
      feedbackElement.textContent = 'Correct!';
      score++;
    } else {
      feedbackElement.textContent = 'Incorrect!';
    }
    clearInterval(timer);
    nextBtn.classList.remove('hidden');
  }
  
  function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `${score} out of ${questions.length}`;
  }

  
  
  function startTimer() {
    let timeLeft = timePerQuestion;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
      } else {
        timerElement.textContent = `Time Left: ${timeLeft}s`;
      }
    }, 1000);
  }
