// 유틸 함수
// get 함수 만들기

// IIFE 패턴 캡슐화
// const attr = (function () {
//   function getAttr(node, prop) {
//     if (typeof node === "string") {
//       node = getNode(node);
//     }
//     return node.getAttribute(prop);
//   }

//   // set 함수 만들기
//   // common 함수 만들기

//   function setAttr(node, prop, value) {
//     if (typeof node === "string") node = getNode(node);

//     if (typeof prop !== "string")
//       throw new TypeError(
//         "setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다"
//       );

//     if (!value)
//       throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");

//     node.setAttribute(prop, value);
//   }

//   const attr = (node, prop, value) =>
//     // if (!value) {
//     //   return getAttr(node, prop);
//     // } else {
//     //   setAttr(node, prop, value);
//     // }
//     !value ? getAttr(node, prop) : setAttr(node, prop, value);

// // incapsulation 캡슐화
// // 정보은닉
//  return attr
// })();

function atrr() {
  function getAttr(node, prop) {
    if (typeof node === "string") {
      node = getNode(node);
    }
    return node.getAttribute(prop);
  }

  // set 함수 만들기
  // common 함수 만들기

  function setAttr(node, prop, value) {
    if (typeof node === "string") node = getNode(node);

    if (typeof prop !== "string")
      throw new TypeError(
        "setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다"
      );

    if (!value)
      throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");

    node.setAttribute(prop, value);
  }

  const attr = (node, prop, value) =>
    // if (!value) {
    //   return getAttr(node, prop);
    // } else {
    //   setAttr(node, prop, value);
    // }
    !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
