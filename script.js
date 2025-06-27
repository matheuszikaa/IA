const questions = [
  {
    question: "Quem é considerado o pai da IA?",
    options: ["Alan Turing", "Elon Musk", "Isaac Asimov", "Steve Jobs"],
    answer: "Alan Turing"
  },
  {
    question: "O que significa 'machine learning'?",
    options: [
      "Máquinas preguiçosas",
      "Aprendizado automático",
      "Computação aleatória",
      "Pensamento humano"
    ],
    answer: "Aprendizado automático"
  }
];

let current = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const q = questions[current];
  quiz.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options
      .map(
        (opt) => `<button class="option">${opt}</button>`
      )
      .join("")}
  `;

  document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === q.answer) {
        score++;
      }
      nextBtn.style.display = "block";
    });
  });
}

nextBtn.addEventListener("click", () => {
  current++;
  nextBtn.style.display = "none";

  if (current < questions.length) {
    showQuestion();
  } else {
    quiz.innerHTML = "";
    scoreDisplay.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
  }
});

showQuestion();
