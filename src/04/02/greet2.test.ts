import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", ()=>({
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good bye,${name}`,
}));


test("挨拶を返さない（本来の実装ではない）", () => {
  console.log("👹");
  expect(greet("Taro")).toBe("Hello,Taro!");
});

test("さよならを返す（モックの実装）", () =>{
  const message = `${sayGoodBye("Taro")} see you`;
  expect(message).toBe("Good bye, Taro see you");
});