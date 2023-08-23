import { ChangeEvent } from "react";
import { atom, useRecoilState } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
