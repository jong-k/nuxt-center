import { atom } from "recoil";

export const todoListState = atom<TodoListItem[]>({
  key: "todoListState",
  default: [],
});
