import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/todo/atoms";
import { ChangeEvent } from "react";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilter(value as TodoListFilter);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">전체</option>
        <option value="Show Done">완료</option>
        <option value="Show UnDone">미완료</option>
      </select>
    </>
  );
}
