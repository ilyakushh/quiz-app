import styles from "./QuizNavigationPanel.module.scss";
import clock from "../../../img/Time.svg";
import { Link } from "react-router-dom";

const QuizNavigationPanel = ({
  handleNextQuestion,
  currentQuestionIndex,
  questions,
  timer,
}) => {
  return (
    <div className={styles.quizNavigationPanel}>
      <div className={styles.time}>
        <img src={clock} alt="" />
        <span className={timer <= 10 ? styles.countdownWarning : ""}>
          {timer}
        </span>
      </div>
      {currentQuestionIndex === questions.length - 1 ? (
        <Link to="/results">
          <button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </Link>
      ) : (
        <button onClick={handleNextQuestion}>
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default QuizNavigationPanel;
