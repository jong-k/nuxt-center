import { useRecoilValue } from "recoil";
// import { todoListState } from "../recoil/todo/atoms";
import { filteredTodoListState } from "../recoil/todo/selectors";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilter";

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
