// store all the questions and answers in an array

const questionsAndAnswers = [
  {
    question: "What is the smallest U.S. state?",
    correctAnswer: "Rhode Island",
    choices: ["Rhode Island", "Maryland", "Connecticut", "Delaware"]
  },
  {
    question: "What is the tallest mountain in the United States?",
    correctAnswer: "Mount McKinley",
    choices: ["Mount Hood", "Mount Rainer", "Mount McKinley"]
  }
];
/* we will use this div with an id of 'root' to append the question container to */
const root = document.getElementById("root");
let currentQuestionIndex = 0;
let correctQuestions = 0;
let totalQuestions = questionsAndAnswers.length;


/* renderQuestion function solely renders each question and its choices, there is no win logic in here*/
const renderQuestion = function() {
  let previous = document.querySelector(".container");
  /* because we only want  to render one question
  at a time, we will remove the previous question
  if there was one. */
  if (previous) root.removeChild(previous);
  let currentQuestion = questionsAndAnswers[currentQuestionIndex];
  let h1 = document.createElement("h1");
  h1.innerHTML = currentQuestion.question;
  let container = document.createElement("div");
  container.classList.add("container");
  root.appendChild(container);
  container.appendChild(h1);
  currentQuestion.choices.forEach(choice => {
    let choicesButton = document.createElement("button");
    choicesButton.classList.add("choice");
    choicesButton.innerHTML = choice;
    choicesButton.addEventListener("click", checkIsRight)
    container.appendChild(choicesButton);
  });
};

/* checkIsRight function compares the guess to the correct answer*/
const checkIsRight = function() {
  let currentQuestion = questionsAndAnswers[currentQuestionIndex];
  let guess = this.innerHTML;
  let answer = currentQuestion.correctAnswer;
  if (answer === guess) {
    alert("correct!");
    correctQuestions += 1;
    currentQuestionIndex += 1;
    checkForWin();
  } else {
    alert("Try Again!");
    currentQuestionIndex += 1;
    checkForWin();
  }
};

renderQuestion();

const checkForWin = function() {
  if(currentQuestionIndex === totalQuestions) {
    alert(`You got ${correctQuestions} out of  ${totalQuestions} questions right! The game will now start over`)
  currentQuestionIndex = 0;
    correctQuestions = 0;
    renderQuestion();
  }
  else{
    renderQuestion();
  }
}

