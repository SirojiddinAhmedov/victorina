const questions = [
    {
    q: "Look at the picture. What is happening?",
    img: "img/bus.jpg",
    options: [
      "He is missing the bus.",
      "He is cooking.",
      "He is sleeping.",
      "He is swimming."
    ],
    answer: 0
  },

  {
    q: "You’re in a cafe. Choose the most polite sentence:",
    options: [
      "Give me water.",
      "Water!",
      "Could I have some water, please?",
      "You must bring water."
    ],
    answer: 2
  },
  {
    q: "Which word is closest to “brilliant”?",
    options: ["Smart", "Heavy", "Slow", "Empty"],
    answer: 0
  },
  {
    q: "Your friend texts: “I passed the exam 😭”. What does it mean?",
    options: [
      "He is angry",
      "He is happy",
      "He is sick",
      "He failed"
    ],
    answer: 1
  },
  {
    q: "If I ____ more time, I would travel.",
    options: ["have", "had", "will have", "having"],
    answer: 1
  },
  {
    q: "Someone drops a glass. What do you say?",
    options: [
      "Are you okay?",
      "Congratulations",
      "Sleep now",
      "Winner"
    ],
    answer: 0
  }
];

let index = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");
const bar = document.getElementById("bar");
const result = document.getElementById("result");
const quiz = document.getElementById("quiz");

load();

function load() {

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const media = document.getElementById("media");


  selected = null;

  const q = questions[index];

  counter.innerText = `Question ${index + 1} / ${questions.length}`;

  questionEl.innerText = q.q;

  // Image logic
if (q.img) {
  media.src = q.img;
  media.style.display = "block";
} else {
  media.style.display = "none";
}


  answersEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      selected = i;

      document
        .querySelectorAll("#answers button")
        .forEach(b => b.style.background = "#1e293b");

      btn.style.background = "#22c55e";
    };

    answersEl.appendChild(btn);
  });

  bar.style.width =
    ((index + 1) / questions.length) * 100 + "%";
}

nextBtn.onclick = () => {

  if (selected === null) {
    alert("Choose an answer!");
    return;
  }

  if (selected === questions[index].answer) {
    score++;
  }

  index++;

  if (index < questions.length) {
    load();
  } else {
    finish();
  }
};

function finish() {

  quiz.classList.add("hidden");

  let level = "";

  if (score <= 1) level = "Beginner (A1)";
  else if (score <= 3) level = "Elementary (A2)";
  else if (score <= 4) level = "Intermediate (B1)";
  else level = "Advanced (B2)";

  result.innerHTML = `
    <h2>Your Result</h2>
    <p>Score: ${score} / ${questions.length}</p>
    <h3>Level: ${level}</h3>
    <p>📚 We recommend joining our course!</p>
  `;

  result.classList.remove("hidden");
}
