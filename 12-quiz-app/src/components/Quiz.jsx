import {useCallback, useState} from "react";
import QUESTIONS from "../questions";
import QuizComplete from "./QuizComplete.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerStatus, setAnswerStatus] = useState('');
  const [pickedAnswers, setPickedAnswers] = useState([]);
  const activeQuestionIndex = answerStatus === '' ? pickedAnswers.length : pickedAnswers.length - 1;

  const handleSelectAnswer = useCallback(selectedAnswer => {
    setPickedAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
    if (selectedAnswer === null) {
      return;
    }
    setAnswerStatus('selected');
    const activeQuestion = QUESTIONS[activeQuestionIndex]
    const correctAnswer = activeQuestion.answers[0];
    setTimeout(() => {
      if (selectedAnswer === correctAnswer) {
        setAnswerStatus('correct');
      } else {
        setAnswerStatus('wrong');
      }

      setTimeout(() => {
        setAnswerStatus('');
      }, 2000);
    }, 1000);
  }, [])

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;
  if (isQuizCompleted) {
    return (<QuizComplete />);
  }

  return (
    <div id="quiz">
      <Question
        // add key attached to the question id allow the timer to be re-created after skip to the next question
        key={activeQuestionIndex}
        {...QUESTIONS[activeQuestionIndex]}
        selectedAnswer={pickedAnswers[pickedAnswers.length - 1]}
        answerStatus={answerStatus}
        onAnswerSelect={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}