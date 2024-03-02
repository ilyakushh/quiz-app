import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctAnswers: 0,
  selectedTopic: "",
  selectedTopicIndex: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    incrementCorrectAnswers(state) {
      state.correctAnswers += 1;
    },
    resetCorrectAnswers(state) {
      state.correctAnswers = 0;
    },
    setSelectedTopic(state, action) {
      state.selectedTopic = action.payload;
    },
    setSelectedTopicIndex(state, action) {
      state.selectedTopicIndex = action.payload;
    },
  },
});

export const {
  incrementCorrectAnswers,
  resetCorrectAnswers,
  setSelectedTopic,
  setSelectedTopicIndex,
} = quizSlice.actions;

export default quizSlice.reducer;
