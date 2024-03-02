import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
});
