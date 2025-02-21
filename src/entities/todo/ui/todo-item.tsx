import { Todo } from "../model/types";
import { removeTodo } from "../model/todoSlice";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";
import { Button } from "@shared/ui/button";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full font-medium">
          {todo.timeLeft}
        </div>
        <span className="text-gray-700">{todo.text}</span>
      </div>
      <Button
        variant="icon"
        onClick={() => dispatch(removeTodo(todo.id))}
        className=" bg-red-100 "
      >
        Удалить
      </Button>
    </div>
  );
};
