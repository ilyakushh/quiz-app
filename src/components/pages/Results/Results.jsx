import { Link } from "react-router-dom";
import styles from "./Results.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  resetCorrectAnswers,
  setSelectedTopic,
} from "../../../store/quiz/quizSlice";
import { questionData } from "../../../data/questionData";

const Results = () => {
  const dispatch = useDispatch();
  const correctAnswers = useSelector((state) => state.quiz.correctAnswers);
  const selectedTopicIndex = useSelector(
    (state) => state.quiz.selectedTopicIndex
  );
  const handleReset = () => {
    dispatch(resetCorrectAnswers());
  };
  const handleNextTopic = () => {
    const topic = Object.keys(questionData);
    dispatch(setSelectedTopic(topic[selectedTopicIndex + 1]));
  };
  return (
    <div className={styles.resultsContainer}>
      <h3>Your score</h3>
      <div className={styles.circle}>
        <p>{correctAnswers}</p>
      </div>
      <div className={styles.buttons}>
        <Link to="/">
          <button onClick={handleReset}>Home</button>
        </Link>
        {correctAnswers < 10 ? (
          <Link to="/quiz">
            <button onClick={handleReset}>Try Again</button>
          </Link>
        ) : (
          <Link to="/quiz">
            <button onClick={handleNextTopic}>Next Quiz</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Results;
