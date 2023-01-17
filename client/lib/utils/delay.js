import { getNode } from "../dom/getNode.js";

const first = getNode(".first");

const delay = (callback, timeout = 1000) => {
  setTimeout(callback, timeout);
};

// 두 개가 같이 실행됨
// 이런 경우가 callback이 필요한 경우임
// first.style.top = "-100px";
// first.style.transform = "rotate(360deg)";
// first.style.top = "0px";

delay(() => {
  first.style.top = "-100px";
  delay(() => {
    first.style.transform = "rotate(360deg)";
    delay(() => {
      first.style.top = "0px";
    });
  });
});
