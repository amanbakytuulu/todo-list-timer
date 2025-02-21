import { useEffect } from "react";
import { updateTimers } from "../../../entities/todo/model/todoSlice";
import { useAppSelector } from "@shared/lib/hooks/use-app-selector";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";
import { AddTodoForm } from "@features/add-todo";
import { selectTodos, TodoItem } from "@entities/todo";
import { ClearTodosButton } from "@features/clear-todos";

export const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!todos.length) return;

    const interval = setInterval(() => {
      dispatch(updateTimers());
    }, 1000);

    return () => clearInterval(interval);
  }, [todos.length, dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            Список задач
          </h1>

          <AddTodoForm />

          <div className="space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>

          {todos.length > 0 && (
            <div className="mt-6 flex justify-end">
              <ClearTodosButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
