import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/Login";
import QuizQuestions from "../QuizQuestions/QuizQuestions";
import Results from "../pages/Results/Results";

const AppRoutes = ({ toggleModal }) => {
  return (
    <Routes>
      <Route index element={<Home toggleModal={toggleModal} />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/quiz" element={<QuizQuestions />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default AppRoutes;
