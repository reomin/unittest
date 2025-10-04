const config = {
  mock: true,
  feature: { spy: true },
};

export function checkConfig(callback?: (payload: object)=> void){
  callback?.(config);
}

// export function checkConfig(callback?: (payload: object) => void) {
//   callback?.(config);
// }
