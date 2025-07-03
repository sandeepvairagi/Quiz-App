const allQuestions = [
  { question: "Which language runs in a web browser?", a: "Java", b: "C", c: "Python", d: "JavaScript", correct: "d" },
  { question: "What does CSS stand for?", a: "Central Style Sheets", b: "Cascading Style Sheets", c: "Cascading Simple Sheets", d: "Cars SUVs Sailboats", correct: "b" },
  { question: "What does HTML stand for?", a: "Hypertext Markup Language", b: "Hypertext Markdown Language", c: "Hyperloop Machine Language", d: "Helicopters Terminals Motorboats Lamborghinis", correct: "a" },
  { question: "What year was JavaScript launched?", a: "1996", b: "1995", c: "1994", d: "none of the above", correct: "b" },
  { question: "Which company developed JavaScript?", a: "Microsoft", b: "Netscape", c: "Google", d: "Apple", correct: "b" },
  { question: "What does DOM stand for?", a: "Document Object Model", b: "Data Object Management", c: "Desktop Oriented Model", d: "Dynamic Object Method", correct: "a" },
  { question: "Which tag is used to define JavaScript?", a: "<script>", b: "<js>", c: "<javascript>", d: "<code>", correct: "a" },
  { question: "Which of these is a JavaScript framework?", a: "Django", b: "Laravel", c: "React", d: "Rails", correct: "c" },
  { question: "What symbol is used for comments in JS?", a: "#", b: "//", c: "<!-- -->", d: "**", correct: "b" },
  { question: "Which HTML tag creates a hyperlink?", a: "<a>", b: "<link>", c: "<href>", d: "<p>", correct: "a" },
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const quizData = shuffle(allQuestions).slice(0, 4);

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="quiz-header">
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Play Again</button>
        </div>
      `;
    }
  }
});