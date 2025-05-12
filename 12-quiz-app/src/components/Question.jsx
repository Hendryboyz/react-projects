import {useState} from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answers.jsx";
import QUESTIONS from "../questions";

export default function Question({index, onAnswerSelect, onSkipAnswer}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const { text, answers } = QUESTIONS[index];

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    const correctAnswer = answers[answers.length - 1];
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === correctAnswer,
      });

      setTimeout(() => {
        onAnswerSelect(answer);
        setAnswer({
          selectedAnswer: '',
          isCorrect: null,
        });
      }, 2000)
    }, 1000);
  };

  let answerStatus = answer.selectedAnswer ? 'selected' : '';
  if (answer.isCorrect !== null) {
    answerStatus = answer.isCorrect ? 'correct' : 'wrong';
  }


  let timeoutSecs = 10;
  if (answer.selectedAnswer) {
    timeoutSecs = 1;
  }
  if (answer.isCorrect !== null) {
    timeoutSecs = 2;
  }


  return (
    <div id="question">
      <QuestionTimer
        key={timeoutSecs}
        timeout={timeoutSecs * 1000}
        onTimeout={answer.selectedAnswer ? null : onSkipAnswer}
        mode={answerStatus ? 'answered' : ''}
      />
      <h2>{text}</h2>
      <Answer
        answers={answers}
        selectedAnswer={answer.selectedAnswer}
        answerStatus={answerStatus}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}