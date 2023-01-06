/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */

// 복사(copy) vs. 참조(reference)

let message = "문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.";
let messenger = {
  name: "kakao talk",
  manufacture: "kakao",
};

// 원시 데이터에는 영향이 없다! 얕은 복사
let text = message;

text = "안녕";

let conversationTool = messenger;

// 참조에 의한 복사 객체 안에 있는 것을 복사해도
// messenger과 conversationToll의 name 값이 둘다
// 똑같이 바꿔진다.

// conversationTool.name = "line";

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};

for (const key in messenger) {
  cloneObject[key] = messenger[key];
}

// 2. Object.assign()을 사용한 복사(얕은 복사)
const copyObject = Object.assign({}, messenger);

// 3. 전개 연산자(...)를 사용한 복사(얕은 복사)
const spreadObject = { ...messenger };

// 4. 객체를 복사해주는 유틸 함수

const copyedObject = (object) => Object.assign({}, object);
// 객체 병합(합성)
const cssMapA = {
  color: "#4b004b",
  margin: "0 auto",
};

const cssMapB = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  padding: "0.4em 0.62em",
  color: "#3f9e97",
};

//  let combinedCssMap = Object.assign({},cssMapA,cssMapB);
let combinedCssMap = { ...cssMapA, ...cssMapB };

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  "min-height": "100vh",
  "max-width": {
    sm: "90%",
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === "object") {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

let copyedContainerStyles = cloneDeep(containerStyles);



// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
