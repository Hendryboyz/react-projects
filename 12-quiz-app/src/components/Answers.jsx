import {useRef} from "react";

export default function Answer({answers, selectedAnswer, answerStatus, onSelect}) {
  const shuffledAnswers = useRef(undefined);

  if (shuffledAnswers.current === undefined) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = isSelected ? answerStatus : "";

        return (
          <li key={index} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        )
      })}
    </ul>
  );
}