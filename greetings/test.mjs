import { sayHi, getParamSum } from "./sayhi.mjs";

console.log(`======================> inside test`);

export function test() {
  console.log("--------------->", getParamSum());
}
