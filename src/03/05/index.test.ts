import { add, RangeError, HttpError, sub } from ".";

describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
      expect(() => add(110, -10)).toThrow(HttpError);
    });
    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });

    test("引数が'0~1'の範囲外だっと場合、例外をスローする", () =>{
      const message = "入力値は0〜100の間で入力してください";
      const error = new RangeError(message);
      expect(() => add(-10, 10)).toThrow(error);
      expect(() => add(110, -10)).toThrow(message);
    })
  });
  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の合計は、下限が'0'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
    test("引数が'0〜100'の範囲外だった場合、例外をスローする", () => {
      expect(() => sub(-10, 10)).toThrow(RangeError);
      expect(() => sub(10, -10)).toThrow(RangeError);
      expect(() => sub(-10, 110)).toThrow(Error);
    });
  });
});
