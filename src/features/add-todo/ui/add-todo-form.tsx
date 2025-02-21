import { useState, FormEvent } from "react";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";
import { addTodo } from "@entities/todo";
import { Button } from "@shared/ui/button";

export const AddTodoForm = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch(addTodo(inputText.trim()));
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Введите задачу..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <Button type="submit">
        Add Task
      </Button>
    </form>
  );
};
