import { clearTodos } from "@entities/todo";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";
import { Button } from "@shared/ui/button";

export const ClearTodosButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button variant="secondary" onClick={() => dispatch(clearTodos())}>
      Очистить всё
    </Button>
  );
};
