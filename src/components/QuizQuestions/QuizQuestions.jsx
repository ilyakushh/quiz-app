import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import QuizNavigationPanel from "./QuizNavigationPanel/QuizNavigationPanel";
import styles from "./QuizQuestions.module.scss";
import { questionData } from "../../data/questionData";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCorrectAnswers } from "../../store/quiz/quizSlice";

const QuizQuestions = () => {
  const dispatch = useDispatch();
  const selectedTopic = useSelector((state) => state.quiz.selectedTopic);
  const questions = questionData[selectedTopic];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [clickedOption, setClickedOption] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(60);
  const totalQuestions = questions.length;
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      dispatch(incrementCorrectAnswers());
    }
    setSelectedAnswer(null);
    setClickedOption(null);
    setTimer(60);
  };
  const handleOptionClick = (index) => {
    setSelectedAnswer(questions[currentQuestionIndex].options[index]);
    setClickedOption(index);
  };

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
    const countdownTimer = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(countdownTimer);
  }, [timer]);
  return (
    <div className={styles.quizQuestionsContainer}>
      <ProgressIndicator
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <p>{questions[currentQuestionIndex].question}</p>
      <div className={styles.answers}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <p
            key={option}
            className={index === clickedOption ? styles.active : ""}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </p>
        ))}
      </div>
      <QuizNavigationPanel
        handleNextQuestion={handleNextQuestion}
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
        timer={timer}
      />
    </div>
  );
};

export default QuizQuestions;
