export function greet(name: string, callback?: (message:string)=>void){
  callback?.(`Hello, ${name}.`);
}


// export function greet(name:String){
//   return `Hello, ${name}.`;
// }

// export function greet(name: string, callback?: (message: string) => void) {
//   callback?.(`Hello! ${name}`);
// }
