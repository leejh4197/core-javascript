import { copy, getInputValue, getNode, getRandom, showAlert } from "./lib/index.js";
import { jujeobData } from "./data/data.js";
import { clearContents } from "./lib/index.js";
import { addClass, insertLast, removeClass } from "./lib/dom/index.js";
import { isNumbericString } from "./lib/index.js";

const submit = getNode("#submit");
const input = getNode("#nameField");
const result = getNode(".result");

// 이름 입력했을때 submit
const clickSubmitHandler = (e) => {
  e.preventDefault();
  let name = getInputValue(input);
  let list = jujeobData(name);
  let randomJujeob = list[getRandom(list.length - 1)];
  if (!name) {
    // gsock
    showAlert('.alert-error', '잘못된 정보입니다.!',2000)
    gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    //          target/duration/from  /to

    // showAlert(".alert-error", "이름을 입력해주세요", 2000);
    // addClass(result,'shake')
    // setTimeout(()=>{
    //   removeClass(result,'shake')
    // },1000)
    return;
  }
  // else if (isNaN(name) === false) {
  //   alert("문자열을 입력해주세요");
  //   return;
  // }
  if (isNumbericString(name)) {
    showAlert(".alert-error", "숫자는 입력 하지마세요", 2000);
    gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    return;
  }
  clearContents(result);
  insertLast(result, randomJujeob);
};

const clickCopyHandler = () =>{
  let text = result.textContent;
  
  copy(text).then(()=>{

    showAlert('.alert-success','클립보드 복사가 완료 됐습니다.',2000)
  })
}

submit.addEventListener("click", clickSubmitHandler);
result.addEventListener('click', clickCopyHandler)