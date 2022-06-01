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
  document
    .querySelectorAll(".alternative")
    .forEach((el, i) => (el.textContent = question.alternatives[i]));
}

showQuestion(question);
