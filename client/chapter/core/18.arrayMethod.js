/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowercase() === "array"
  );
}

function isNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowercase() === "Null"
  );
}

console.log(Array.isArray([]));

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

const span = document.querySelectorAll('span');


span.forEach((item,index)=>{

  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    console.log(index);
  })
  
})

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
console.log(arr);
// splice
//        시작,제거[추가]
arr.splice(1, 0, 23, 5);
console.log(arr);
// sort
arr.sort((a, b) => a - b);
console.log(arr);
/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ["밥먹기", "미용실가기", "코딩공부하기"];
let template = todo.map((todoList) => {
  return /*html */ `<li>${todoList}</li>`;
});

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

// console.log(template)

let newArray = arr.map((item) => item * 2);
// console.log(newArray)

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

console.log(arr.indexOf(100));
// lastIndexOf
// includes
console.log(arr.includes(100));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];
// find
const find = users.find((item, index) => {
  return item.id < 5;
});
console.log(find);

// findIndex

const findIndex = users.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);
/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number) => {
  return number > 100;
});
console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: "윤보라",
    age: 32,
    job: "작꼬저",
  },
  {
    name: "이로운",
    age: 32,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 32,
    job: "물음표 살인마",
  },
];

// reduce
// 친구들 나이의 총 합을 구하세요.
let age = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`;
}, "");

console.log(template2);
console.log(age);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬 보경 일범 세민 형진 주현";
// split
let nameArray = str.split(' ');
console.log(nameArray)

// join
console.log(nameArray.join(' / '))
