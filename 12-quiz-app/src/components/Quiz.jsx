import {useCallback, useState} from "react";
import QUESTIONS from "../questions";
import QuizComplete from "./QuizComplete.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [pickedAnswers, setPickedAnswers] = useState([]);
  const activeQuestionIndex = pickedAnswers.length;

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;
  if (isQuizCompleted) {
    return (<QuizComplete />);
  }

  const {id, text, answers} = QUESTIONS[activeQuestionIndex];
  const handleSelectAnswer = useCallback(selectedAnswer => {
    setPickedAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
  }, [])

  const shuffledAnswers = [...answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const timeoutSecs = 5;
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={id} // add key attached to the question id allow the timer to be re-created after skip to the next question
          timeout={timeoutSecs * 1000}
          onTimeout={handleSkipAnswer} />
        <h2>{text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}