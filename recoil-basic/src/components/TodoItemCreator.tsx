import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todo/atoms";
import { getUid } from "../utils";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  // todoItem 을 추가하고 바로 todoList 전역 상태를 업데이트하기 위해
  // useSetRecoilState를 사용하여 setter 선언
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getUid(),
        text: inputValue,
        isDone: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem}>
        추가
      </button>
    </div>
  );
}
