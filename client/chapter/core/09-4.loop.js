/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return "헤헤";
  },
};

let key = "valueOf";

key in javaScript;
// console.log(key in javaScript);
// console.log(valueOf);
// 이미 가지고 있는 native code도 있다고 판단하여 valueOf를
// key 값으로 넣었을 때 true가 나온다.

/* 자신이 가지고 있는 속성의 key 값만을 확인하고 싶으면 아래코드를
 적어줘야한다.*/
// console.log(javaScript.hasOwnProperty(key));
/* hasOwnProperty에 빨간 줄이 뜨는 이유는 자바스크립트 내에서 보호해주지
않기 때문이다.*/

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
/*hasOwnProperty에 접근하고자 하면 위 코드를 사용해야한다.
진짜 Object에 property에 접근할 수 있다.*/

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// let a = {};
// Object.prototype === {};

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

const user = {
  name: "joo",
  age: 28,
};

function hello() {
  console.log(this);
}

hello.call(user);

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
// 객체에서만 활용하길 권장함

let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}
