import completeImage from '../assets/quiz-complete.png';

export default function QuizComplete({}) {
  return (
    <div id="summary">
      <img src={completeImage} alt="Quiz Complete"/>
      <h2>Quiz Completed!</h2>
    </div>
  );
}