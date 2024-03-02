import styles from "./ProgressIndicator.module.scss";

const ProgressIndicator = ({ totalQuestions, currentQuestionIndex }) => {
  const circles = Array(totalQuestions)
    .fill()
    .map((_, index) => index + 1);
  return (
    <div className={styles.progressIndicatorContainer}>
      {circles.map((circle) => (
        <span
          key={circle}
          className={circle <= currentQuestionIndex ? styles.completed : ""}
        >
          {circle}
        </span>
      ))}
    </div>
  );
};

export default ProgressIndicator;
