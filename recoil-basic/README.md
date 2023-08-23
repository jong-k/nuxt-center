# Recoil Basic

## 1. Recoil을 사용하는 이유
Recoil 을 사용하는 이유는 단순함, 호환성 때문일 것이다. 그런데 단순함과 호환성 때문이라면 React 에 내장된 `Context API` 또는 `useReducer` 를 사용하면 되지 않을까??

### 1.1. React 내장 상태관리 API(Context API, useReducer)의 한계
- 컴포넌트의 상태는 공통된 부모 컴포넌트까지 끌어 올려서만 공유할 수 있다.
   - 이 과정에서 부모 컴포넌트의 상태를 변경하면 렌더 트리 아래의 무수히 많은 컴포넌트가 리렌더링된다
- Context 는 단일 값(객체 1개)만 저장할 수 있으며, 여러 값의 집합을 담으려면 여러 Context Provider를 만들어야 한다

→ 이 2가지 특성이 상태가 존재하는 곳(최상단)과 상태가 사용되는 곳(말단) 까지의 코드 분할을 어렵게 만든다

- Recoil은 상태관리 API를 React답게 유지하며 이것을 개선한다

## 2. 핵심 개념
atoms(공유 상태)에서 selectors(순수 함수)를 거쳐 컴포넌트로 내려가는 data flow graph를 만들 수 있다.
- atoms : 컴포넌트가 구독할 수 있는 상태 단위
- selectors : atoms 상태 값을 변환 (동기 or 비동기)

### 2.1. atoms
상태의 단위이며, 업데이트와 구독 가능
- atom 업데이트 → 구독중인 컴포넌트 리렌더링
- `atom` 함수를 사용하여 생성
```js
const fontSizeState = atom({
	key: "fontSizeState", // uid 성격을 띄며 전역적으로 고유해야 함
	default: 14. // 상태 기본값
});
```

- 컴포넌트에서 atom을 읽고 쓰려면 `useRecoilState` 라는 훅을 사용. useState 와는 다르게 상태가 전역적으로 공유된다
```js
// 버튼을 클릭하면 버튼 글꼴 크기가 1 증가하며,
function FontButton() {
	const [fontSize, setFontSize] = useRecoilState(fontSizeState);
	return (
		<button onClick={() => setFontSize((size) => size + 1)}>
			Click to Enlarge
		</button>
	)
}

// fontSizeState atom을 사용하는 다른 컴포넌트의 글꼴 크기도 증가
function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{fontSize}}>This text will increase in size too.</p>;
}
```

### 2.2. selectors
atoms 나 다른 selectors 를 입력으로 받아들여 파생 데이터를 반환하는 순수 함수
- 상위의 atoms 또는 selectors가 업데이트되면 하위의 selectors 함수도 다시 실행된다
- 컴포넌트들은 selectors 를 atoms 처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트도 리렌더링된다
```js
const fontSizeLabelState = selector({
	key: "fontSizeLabelState",
	// get 프로퍼티 : fontSizeState atom을 기반으로 파생 데이터를 계산하여 반환하는 순수함수
	get: ({ get }) => {
		const fontSize = get(fontSizeState); // atom 의존성을 가짐
		const unit = "px";
		return `${fontSize}${unit}`;
	},
});
```
- `useRecoilValue` 함수를 이용해 selector 값을 읽을 수 있다
   - selector 는 writable 하지 않기 때문에 useRecoilState 를 이용하지 않는다
```js
function FontButton() {
	const [fontSize, setFontSize] = useRecoilState(fontSizeState);
	const fontSizeLabel = useRecoilValue(fontSizeLabelState); // 14px
	return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>
      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    </>
  );
}
```