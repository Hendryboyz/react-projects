import completeImage from '../assets/quiz-complete.png';
import QUESTIONS from "../questions";

export default function QuizComplete({pickedAnswers}) {
  const totalQuestions = QUESTIONS.length;
  const skippedAnswers = pickedAnswers.filter(answer => answer === null);
  const correctAnswers = pickedAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const skippedShare = Math.round(skippedAnswers.length / totalQuestions * 100);
  const correctShare = Math.round(correctAnswers.length / totalQuestions * 100);
  const wrongShare = 100 - skippedShare - correctShare;
  return (
    <div id="summary">
      <img src={completeImage} alt="Quiz Complete"/>
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">answer correctly</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">answer incorrectly</span>
        </p>
      </div>
      <ol>
        {QUESTIONS.map((question, index) => {
          const {id, text, answers} = question;
          let userAnswer = pickedAnswers[index];
          let answerClass = '';
          if (userAnswer === null) {
            answerClass = 'skipped';
          } else {
            answerClass = userAnswer === answers[0] ? 'correct' : 'wrong';
          }
          return (
            <li key={id}>
              <h3>{id}</h3>
              <p className="question">{text}</p>
              <p className={`user-answer ${answerClass}`}>{userAnswer ?? 'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}