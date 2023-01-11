// add
const addClass = (node, className) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  }
  node.classList.add(className);
};
// remove
const removeClass = (node, className) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!className) {
    node.className = "";
    return;
  }
  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  }
  node.classList.remove(className);
};

// toggle
const toggleClass = (node, className) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  }
  node.classList.toggle(className);
};



// css 스타일 제어
const getCss = (node, prop) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    syntaxError(
      "getCss 함수의 두 번째 인자인 prop은 유요한 css 속성이 아닙니다."
    );
  }
  return getComputedStyle(node)[prop];
};

const setCss = (node, prop, value) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    syntaxError(
      "getCss 함수의 두 번째 인자인 prop은 유요한 css 속성이 아닙니다."
    );
  }
  if (!value) {
    syntaxError("setCSS 함수의 세 번째 인자는 필수값 입니다.");
  }
  node.style[prop] = value;
};


// const css = (node,prop,value) =>{
//   if(!value){
//     getCss(node,prop)
//   }else{
//     setCss(node,prop,value)
//   }
// }

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);
