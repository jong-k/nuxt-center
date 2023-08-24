import { atom } from "recoil";

export const todoListState = atom<TodoListItem[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom<TodoListFilter>({
  key: "todoListFilterState",
  default: "Show All",
});
