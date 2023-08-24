import { selector } from "recoil";
import { todoListState, todoListFilterState } from "./atoms";

export const filteredTodoListState = selector<TodoListItem[]>({
  key: "filteredTodoListState",
  get: ({ get }) => {
    // todoListFilterState 또는 todoListState가 바뀌면
    // filteredTodoListState는 재실행됨
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Done":
        return list.filter((item) => item.isDone);
      case "Show UnDone":
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalDoneNum = todoList.filter((item) => item.isDone).length;
    const totalUnDoneNum = totalNum - totalDoneNum;
    const percentDone =
      totalNum === 0 ? 0 : Math.round((100 * totalDoneNum) / totalNum);

    return {
      totalNum,
      totalDoneNum,
      totalUnDoneNum,
      percentDone,
    };
  },
});
