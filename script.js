"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const checkButton = document.getElementById("check-button");
    const resetButton = document.getElementById("reset-button");
    const resultBox = document.getElementById("quiz-result");

    if (!quizForm || !checkButton || !resetButton || !resultBox) {
        return;
    }

    const questionNames = ["q1", "q2", "q3"];

    checkButton.addEventListener("click", () => {
        let score = 0;

        for (const questionName of questionNames) {
            const selectedAnswer = document.querySelector(
                `input[name="${questionName}"]:checked`
            );

            if (!selectedAnswer) {
                resultBox.className = "result-warning";
                resultBox.textContent =
                    "Please answer all questions before checking your score.";
                return;
            }

            if (selectedAnswer.value === "correct") {
                score += 1;
            }
        }

        resultBox.className = "result-success";

        if (score === 3) {
            resultBox.textContent = "Excellent! Your score is 3 out of 3.";
        } else if (score === 2) {
            resultBox.textContent = "Good job! Your score is 2 out of 3.";
        } else if (score === 1) {
            resultBox.textContent = "Your score is 1 out of 3. Please try again.";
        } else {
            resultBox.textContent = "Your score is 0 out of 3. Please review the topics.";
        }
    });

    resetButton.addEventListener("click", () => {
        quizForm.reset();
        resultBox.className = "";
        resultBox.textContent = "";
    });
});
