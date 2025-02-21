import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        timeLeft: 10,
      });
    },
    updateTimers: (state) => {
      state.items = state.items
        .map((todo) => ({
          ...todo,
          timeLeft: todo.timeLeft - 1,
        }))
        .filter((todo) => todo.timeLeft > 0);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    clearTodos: (state) => {
      state.items = [];
    },
  },
});

export const { addTodo, updateTimers, removeTodo, clearTodos } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
