import { RecoilRoot } from "recoil";
// import CharacterCounter from "./components/CharacterCounter";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";
import TodoListStats from "./components/TodoListStats";

export default function App() {
  return (
    <RecoilRoot>
      <TodoListStats />
      <TodoItemCreator />
      <TodoList />
    </RecoilRoot>
  );
}
