/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

const calculateTotal = (...args) => {
  let total = 0;
  args.forEach(function (item, index) {
    total += item;
  });
  console.log(args);

  return;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this
function normalFunction() {
  console.log("일반함수:", this);
}

const arrowFunction = () => {
  console.log("화살표함수:", this);
};

// normalFunction();
// arrowFunction();

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기위해서는 arrowFunction이 오히려 좋다.

const user = {
  name: "joo",
  age: 32,
  address: "춘천시 석사동 ",
  grades: [80, 90, 100],
  totalGrades: function () {
    let total = 0;
    this.grades.forEach(function (item) {
      total += item;
    });
    return total;
  },
};

console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// 거듭제곱되는 함수만들기
let pow = ()=>{

};

// repeat(text: string, repeatCount: number): string;
// 특정문자를 반복시켜주는 함수
let repeat;
