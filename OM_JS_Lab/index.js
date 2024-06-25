const allQuestions = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "London", "Madrid"],
      answer: "Paris",
  },
  {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Claude Monet"],
      answer: "Leonardo da Vinci",
  },
  {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
  },
  {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: "Vatican City",
  },
  {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "NaCl", "CO2", "O2"],
      answer: "H2O",
  },
];

let currentQuestion = 0;
let score = 0;
let questions = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateQuestions() {
  shuffleArray(allQuestions);
  questions = allQuestions.slice(0, 5);
}

function displayQuestion() {
  if (currentQuestion < questions.length) {
      const questionElement = document.getElementById("question");
      questionElement.textContent = questions[currentQuestion].question;

      const optionsElement = document.getElementById("options");
      optionsElement.innerHTML = "";

      questions[currentQuestion].options.forEach((option, index) => {
          const optionElement = document.createElement("button");
          optionElement.textContent = option;
          optionElement.id = `option-${index}`;
          optionElement.addEventListener("click", checkAnswer);
          optionsElement.appendChild(optionElement);
      });

      updateProgress();
  } else {
      showResults();
  }
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  if (selectedOption === questions[currentQuestion].answer) {
      score++;
  }
  currentQuestion++;
  displayQuestion();
}

function showResults() {
  const resultsElement = document.createElement("div");
  resultsElement.innerHTML = `
      <h2>Quiz Results</h2>
      <p>Your score: ${score} out of ${questions.length}</p>
      <p>Percentage: ${Math.round((score / questions.length) * 100)}%</p>
  `;

  const quizElement = document.getElementById("quiz");
  quizElement.appendChild(resultsElement);
}

function updateProgress() {
  const progressElement = document.getElementById("progress");
  progressElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

generateQuestions();
displayQuestion();