import { getNode, sum, getInputValue, clearContents, insertLast } from "./lib/index.js";

const first = getNode("#firstNumber");
const second = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

const sum = (valueA, valueB) => Number(valueA) + Number(valueB);

const clearContents = (node) => {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
};

// value값 뽑는 함수
const getInputValue = (node) => {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다.");
  return node.value;
};

const handler = (e) => {
  e.preventDefault();
};
const inputHandler = () => {
  let total = sum(getInputValue(first), getInputValue(second));
  clearContents(result);
  insertLast(result, total);
};

done.addEventListener("click", handler);

first.addEventListener("change", inputHandler);
second.addEventListener("change", inputHandler);
