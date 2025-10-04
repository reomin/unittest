import { getMyProfile } from "../fetchers";

export async function getGreet() {
  // テストしたいのはここのデータ取得と
  const data = await getMyProfile();
  // 取得したデータをここで連結する処理
  if (!data.name) {
    return `Hello, anonymous user!`;
  }
  return `Hello, ${data.name}!`;
}



// export type profile ={
//   id: string;
//   name?: string;
//   age?: number;
//   email: string;
// }


// export function getMyProfileSync(): Promise<profile> {
//   return fetch("https://example.com/api/my/profile").then(async (res) =>{
//     if(!res.ok){
//       throw new Error("Network response was not ok");
//     }else{
//       return res.json() as Promise<profile>;
//     }
//   })
// }