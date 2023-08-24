import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todo/atoms";
import { ChangeEvent } from "react";

interface TodoItemProps {
  item: TodoListItem;
}

export default function TodoItem({ item }: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const itemIdx = todoList.findIndex((listItem) => listItem.id === item.id);

  const replaceItemAtIdx = (
    arr: TodoListItem[],
    idx: number,
    newVal: TodoListItem,
  ) => {
    return [...arr.slice(0, idx), newVal, ...arr.slice(idx + 1)];
  };

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // const newList = [...todoList].map((listItem, idx) =>
    //   idx === itemIdx ? { ...listItem, text: value } : listItem,
    // );
    const newList = replaceItemAtIdx(todoList, itemIdx, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemIsDone = () => {
    const newList = replaceItemAtIdx(todoList, itemIdx, {
      ...item,
      isDone: !item.isDone,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((listItem) => listItem.id !== item.id);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={toggleItemIsDone}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}
