import "./App.scss";
import Header from "./components/Header";
import AppRoutes from "./components/Routes/AppRoutes";
import { useState } from "react";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import { useDispatch } from "react-redux";
import {
  setSelectedTopic,
  setSelectedTopicIndex,
} from "./store/quiz/quizSlice";

//добавить с помощью кэша открытия вопросов по ходу прохождения
function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleTopicClick = (topic, index) => {
    dispatch(setSelectedTopic(topic));
    dispatch(setSelectedTopicIndex(index));
    toggleModal();
  };

  return (
    <div className="app">
      <Header />
      <AppRoutes toggleModal={toggleModal} />
      {isOpen ? (
        <QuestionModal
          handleTopicClick={handleTopicClick}
          toggleModal={toggleModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
