import { getNode } from "../dom/getNode.js";

const first = getNode(".first");
const second = getNode(".second");

const delay = (callback, timeout = 1000) => {
  setTimeout(callback, timeout);
};

// 세 개가 같이 실행됨
// 이런 경우가 callback이 필요한 경우임
// first.style.top = "-100px";
// first.style.transform = "rotate(360deg)";
// first.style.top = "0px";

// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     delay(() => {
//       first.style.top = "0px";
//     });
//   });
// });

// delayP().then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// }).then(()=>{
//   first.style.transform = 'rotate(360deg)'
//   second.style.
// })

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

const delayP = (options = {}) => {
  // 얕은 복사
  // defualt값이 변질되는 것을 방지하기 위해 직접 defaultOptions를 사용하지 않고 변수에 얕은 복사로 지정한다
  let config = { ...defaultOptions };
  // 둘다 똑같은 얕은 복사
  // let config2 = Object.assign({},defaultOptions)

  // 객체 합성 mixin
  // 기존의 값과 던진 값을 합성 시켜주기 위해 객체를 합성한다. 뒤에 options가 덮어진다.
  config = { ...config, ...options };

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
};

delayP({
  shouldReject: true,
  errorMessage: "잘가",
  data: "안녕",
  timeout: 1500,
}).then((res) => {
  console.log(res);
});

// delayP().then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })
