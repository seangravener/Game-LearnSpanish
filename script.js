let question = {
  title: "gato",
  alternatives: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

function showQuestion(q) {
  // 1. select dom element
  let titleEl = document.getElementById("title");

  // 2. modify it
  titleEl.textContent = question.title;

  // selecting by a query
  const elements = document.querySelectorAll(".alternative");
  elements.forEach((el, i) => {
    el.textContent = question.alternatives[i];

    // Add handler to *all* list items
    el.addEventListener("click", (e) => {
      // check answer
      if (q.correctAnswer === i) {
        console.log("Correct answer");
      } else {
        console.log("Incorrect");
      }
    });
  });
}

showQuestion(question);

document
  .getElementById("btn")
  .addEventListener("click", (e) => console.log("click!"));
