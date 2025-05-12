import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answers.jsx";

export default function Question({text, answers, selectedAnswer, answerStatus, onAnswerSelect, onSkipAnswer}) {
  const timeoutSecs = 5;
  return (
    <div id="question">
      <QuestionTimer
        timeout={timeoutSecs * 1000}
        onTimeout={onSkipAnswer}/>
      <h2>{text}</h2>
      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerStatus={answerStatus}
        onSelect={onAnswerSelect}
      />
    </div>
  );
}