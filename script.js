let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

let questions = [
  {
    title: "gato",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1,
  },
  {
    title: "ave",
    alternatives: ["mouse", "hamster", "lizard", "bird"],
    correctAnswer: 3,
  },
  {
    title: "rata",
    alternatives: ["cat", "fish", "rat", "shark"],
    correctAnswer: 2,
  },
  {
    title: "mosca",
    alternatives: ["fly", "puma", "fish", "dog"],
    correctAnswer: 0,
  },
];

let app = {
  currentQuestion: 0,
  currentPosition: 0,

  start: function () {
    const elements = document.querySelectorAll(".alternative");
    elements.forEach((el, i) => {
      el.textContent = question.alternatives[i];

      el.addEventListener("click", (e) => {
        this.checkAnswer(i);
      });
    });

    this.showQuestion(questions[this.currentPosition]);
  },

  showQuestion: function (q) {
    let titleEl = document.getElementById("title");
    const elements = document.querySelectorAll(".alternative");

    titleEl.textContent = q.title;
    this.currentQuestion = q;

    elements.forEach((el, i) => {
      el.textContent = q.alternatives[i];
    });
  },

  checkAnswer: function (selectionId) {
    if (this.currentQuestion.correctAnswer === selectionId) {
      console.log("Correct answer!");
    } else {
      console.log("Incorrect answer!");
    }

    this.showResult();
    this.increasePosition();
    this.showQuestion(questions[this.currentPosition]);
  },

  showResult() {
    let resultEl = document.getElementById("result");
    let resultTxt = "";

    if (this.currentQuestion.correctAnswer === selectionId) {
      console.log("Correct answer!");
    } else {
      console.log(
        `Incorrect (answer is "${
          this.currentQuestion.alternatives[this.currentPosition]
        }")`
      );
    }
  },

  increasePosition: function () {
    this.currentPosition++;

    if (this.currentPosition == questions.length) {
      this.currentPosition = 0;
    }
  },

  addButton: function () {
    document
      .getElementById("btn")
      .addEventListener("click", (e) => console.log("click!"));
  },
};

app.start();
app.addButton();
