import { getParamSum } from "./sayhi.js";

console.log(`======================> inside test`);

function test1() {
  console.log("--------------->", getParamSum());
}

function test2() {
  console.log("--------------->", getParamSum());
}

export { test1, test2 };
