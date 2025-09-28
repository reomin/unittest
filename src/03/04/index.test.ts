import {add, sub} from './index';


describe ('四則演算', () => {
  describe('add', () =>{
    test("返り値は第一引数と第二引数の輪である", () =>{
      expect(add(30, 30)).toBe(60);
    })
    test("返り値の上限は100である", ()=>{
      expect(add(60, 50)).toBe(100);
    })
    test("返り値の型はnumberである", ()=>{
      expect(typeof add(10, 20)).toBe("number");
    })
  })
  describe("sub", () =>{
    test("返り値は第一引数から第二引数を引いた値である", () =>{
      expect(sub(3, 1)).toBe(2);
    })
    test("返り値の下限は0である", () =>{
      expect(sub(3, 5)).toBe(0);
    })
    test("返り値の型はnumberである", ()=>{
      expect(typeof sub(10, 5)).toBe("number");
    })  
  })
});