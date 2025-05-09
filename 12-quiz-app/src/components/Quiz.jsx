import {useState} from "react";
import QUESTIONS from "../questions";

export default function Quiz({}) {
  const [pickedAnswers, setPickedAnswers] = useState([]);
  const activeQuestionIndex = pickedAnswers.length;
  const activeQuestion =
    activeQuestionIndex < QUESTIONS.length ? QUESTIONS[activeQuestionIndex] : undefined;
  const handleSelectAnswer = (selectedAnswer) => {
    setPickedAnswers(prevAnswers => [...prevAnswers, selectedAnswer])
  };

  return (
    <div id="quiz">
      <div id="question">
        {activeQuestion && (
          <>
            <h2>{activeQuestion.text}</h2>
            <ul id="answers">
              {activeQuestion.answers.map((answer, index) => (
                <li key={index} className="answer">
                  <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}