import { Link } from "react-router-dom";
import { questionData } from "../../data/questionData";
import styles from "./QuestionModal.module.scss";
import { ImCross } from "react-icons/im";

const QuestionModal = ({ handleTopicClick, toggleModal }) => {
  return (
    <div className={styles.questionModal}>
      <div className={styles.questionModalContainer}>
        <h3>Select a Topic</h3>
        <ul className={styles.questions}>
          {Object.keys(questionData).map((topic, index) => (
            <Link
              to="/quiz"
              key={topic}
              onClick={() => handleTopicClick(topic, index)}
            >
              <li>{topic}</li>
            </Link>
          ))}
        </ul>
        <ImCross className={styles.icon} onClick={toggleModal} />
      </div>
    </div>
  );
};

export default QuestionModal;
