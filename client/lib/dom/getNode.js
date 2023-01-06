const getNode = (element) => {
  if (typeof element !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입이어야 합니다.");
  }
  return document.querySelector(element);
};

const getNodes = (element) => {
  if (typeof element !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입이어야 합니다.");
  }
  return document.querySelectorAll(element);
};

