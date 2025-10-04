//確認したいテスト
// 指定したタグをもつ記事が一件もない場合、null が返る
// 指定したタグをもつ記事が一件以上ある場合、リンク一覧が返る
// データ取得に失敗した場合、例外がスローされる

import { getMyArticlesData, httpError } from "../fetchers/fixtures";

import * as Fetchers from "../fetchers";
import { getMyArticleLinksByCategory } from ".";
// import { mock } from "node:test";
// import { title } from "process";

jest.mock("../fetchers");

function mockGetMyArticles(status = 200){
  if(status > 299){
    return jest.spyOn(Fetchers,"getMyArticles").mockRejectedValueOnce(httpError);
  }
  return jest.spyOn(Fetchers,"getMyArticles").mockResolvedValueOnce(getMyArticlesData);
}

test("データ取得に成功した場合", async() =>{
  mockGetMyArticles();
})

test("データ取得に失敗した場合", async() =>{
  mockGetMyArticles(500);
})

test("指定したタグを持つ記事が一件もない場合、nullが返る", async() =>{
  //何でここでこれを呼ぶ？？
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toBeNull();
})

test("指定したタグを持つ記事が一件以上ある場合、リンク一覧が帰る", async() =>{
  mockGetMyArticles();

  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toMatchObject([
    {
      "link": "/articles/howto-testing-with-typescript",
      "title": "TypeScript を使ったテストの書き方",
    },{
     "link": "/articles/react-component-testing-with-jest",
     "title": "Jest ではじめる React のコンポーネントテスト",
    }
  ])
})

test("データ取得に失敗した場合、rejectされる", async() =>{
  mockGetMyArticles(500);
  await (getMyArticleLinksByCategory("testing")).catch((err) =>{
    expect(err).toMatchObject({
      err: {message: "internal server error"}
    })
  })
})




// import { getMyArticleLinksByCategory } from ".";
// import * as Fetchers from "../fetchers";
// import { getMyArticlesData, httpError } from "../fetchers/fixtures";

// jest.mock("../fetchers");

// function mockGetMyArticles(status = 200) {
//   if (status > 299) {
//     return jest
//       .spyOn(Fetchers, "getMyArticles")
//       .mockRejectedValueOnce(httpError);
//   }
//   return jest
//     .spyOn(Fetchers, "getMyArticles")
//     .mockResolvedValueOnce(getMyArticlesData);
// }

// test("指定したタグをもつ記事が一件もない場合、null が返る", async () => {
//   mockGetMyArticles();
//   const data = await getMyArticleLinksByCategory("playwright");
//   expect(data).toBeNull();
// });

// test("指定したタグをもつ記事が一件以上ある場合、リンク一覧が返る", async () => {
//   mockGetMyArticles();
//   const data = await getMyArticleLinksByCategory("testing");
//   expect(data).toMatchObject([
//     {
//       link: "/articles/howto-testing-with-typescript",
//       title: "TypeScript を使ったテストの書き方",
//     },
//     {
//       link: "/articles/react-component-testing-with-jest",
//       title: "Jest ではじめる React のコンポーネントテスト",
//     },
//   ]);
// });

// test("データ取得に失敗した場合、reject される", async () => {
//   mockGetMyArticles(500);
//   await getMyArticleLinksByCategory("testing").catch((err) => {
//     expect(err).toMatchObject({
//       err: { message: "internal server error" },
//     });
//   });
// });
