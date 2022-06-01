let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

function start(params) {
  const elements = document.querySelectorAll(".alternative");
  elements.forEach((el, i) => {
    el.textContent = question.alternatives[i];

    // Add handler to *all* list items
    el.addEventListener("click", (e) => {
      // check answer
      console.log("check answer");
    });
  });

  showQuestion(question);
}

function showQuestion(q) {
  // 1. select dom element
  let titleEl = document.getElementById("title");

  // 2. modify it
  titleEl.textContent = question.title;
}

// showQuestion(question);
start();

document
  .getElementById("btn")
  .addEventListener("click", (e) => console.log("click!"));
