let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

let app = {
  currentQuestion: 0,
  start: function () {
    const elements = document.querySelectorAll(".alternative");
    elements.forEach((el, i) => {
      el.textContent = question.alternatives[i];

      // Add handler to *all* list items
      el.addEventListener("click", (e) => {
        // Check answer. Note `this` context is preserved withitin this arrow function callback
        this.checkAnswer(i);
      });
    });

    this.showQuestion(question);
  },

  showQuestion: function (q) {
    // 0. Cache current question
    this.currentQuestion = q;

    // 1. select dom element
    let titleEl = document.getElementById("title");

    // 2. modify it
    titleEl.textContent = question.title;
  },

  checkAnswer: function (selectionId) {
    if (this.currentQuestion.correctAnswer === selectionId) {
      console.log("Correct answer!");
    } else {
      console.log("Incorrect answer!");
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
