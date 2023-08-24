import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todo/selectors";

export default function TodoListStats() {
  const { totalNum, totalDoneNum, totalUnDoneNum, percentDone } =
    useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>전체 항목 수: {totalNum}</li>
      <li>완료된 항목 수: {totalDoneNum}</li>
      <li>미완료 항목 수: {totalUnDoneNum}</li>
      <li>완료율: {percentDone}</li>
    </ul>
  );
}
