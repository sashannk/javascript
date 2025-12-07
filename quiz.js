// Array of quiz questions and answers (updated)
const quizQuestions = [
    { question: "What is the capital of Japan?", answer: "tokyo" },
    { question: "How many days are there in a leap year?", answer: "366" },
    { question: "What gas do plants absorb from the atmosphere?", answer: "carbon dioxide" },
    { question: "Who wrote the play 'Romeo and Juliet'?", answer: "william shakespeare" },
    { question: "What is the fastest land animal?", answer: "cheetah" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // Initialize score

    for (let i = 0; i < quizQuestions.length; i++) {
        let userInput = prompt(quizQuestions[i].question);

        if (!userInput) {
            alert("You did not enter anything! Moving to next question.");
            continue;
        }

        // Normalize input
        userInput = userInput.toLowerCase().trim();

        // Check answer
        if (userInput === quizQuestions[i].answer) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert(`Wrong ❌ The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Final score
    alert(`Quiz Completed!\nYour final score is ${score} out of ${quizQuestions.length}.`);
}

// Run the quiz
runQuiz();
