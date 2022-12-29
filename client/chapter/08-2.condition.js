/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let test = 20;

if (test >= 14 && test <= 90) {
  console.log("14세이상 90세 이하 입니다.");
} else {
  console.log("14세 미만에서 90세 초과입니다.");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

let userName = prompt("사용자 이름을 입력해주세요", "");
let pw = prompt("비밀번호를 입력해줘", "");

if (
  userName === "admin".toUpperCase() ||
  ("admin".toUpperCase() && pw === "joo")
) {
  alert("로그인 완료!");
} else if (userName === "" && pw === "") {
  alert("아이디 비밀번호를 입력해줘");
} else {
  alert("로그인이 거절 됐습니다.");
}
