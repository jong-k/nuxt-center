import { selector, useRecoilValue } from "recoil";
import { textState } from "./TextInput";

export default function CharCount() {
  const charCountState = selector({
    key: "charCountState",
    get: ({ get }) => {
      const text = get(textState);
      return text.length;
    },
  });

  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
