import {useCallback, useState} from "react";
import QUESTIONS from "../questions";
import QuizComplete from "./QuizComplete.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [pickedAnswers, setPickedAnswers] = useState([]);
  const activeQuestionIndex = pickedAnswers.length;

  const handleSelectAnswer = useCallback(selectedAnswer => {
    setPickedAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
  }, [])
  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;
  if (isQuizCompleted) {
    return (<QuizComplete pickedAnswers={pickedAnswers} />);
  }

  return (
    <div id="quiz">
      <Question
        // add key attached to the question id allow the timer to be re-created after skip to the next question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onAnswerSelect={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}