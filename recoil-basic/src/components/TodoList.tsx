import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/todo/atoms";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      {/* {todoList.map((todoItem) => (
        <div></div>
      ))} */}
    </>
  );
}
