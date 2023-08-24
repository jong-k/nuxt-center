/* eslint-disable @typescript-eslint/no-unused-vars */
declare interface TodoListItem {
  id: number;
  text: string;
  isDone: boolean;
}

declare type TodoListFilter = "Show All" | "Show Done" | "Show UnDone";
