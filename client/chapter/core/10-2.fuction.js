/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  console.log(arguments);
  let total = 0;

  // 배열을 만들어준다.
  // let arr = Array.from(arguments);

  // slice는 배열에서만 접근이 가능하기 때문에 prototype에 접근해
  // call함수로 빌려 사용한다.
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  // for of 문
  for (let value of arguments) {
    total += value;
  }
  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  return total;
  // return moneyA + moneyB + moneyC + moneyD;
};
console.log(calculateTotal(100, 500, 300, 150, 200, 330));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  if (typeof url === "string") {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  "http://www.naver.com",
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    console.log("url 입력 정보가 옳바르지 않습니다.");
  }
);

// 함수 선언문 vs. 함수 (표현)식
function aa() {}
const bb = function () {};

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// var 함수 스코프
// let, const 블록 스코프

(function () {
  console.log("hi");
})();
