import {attr, clearContents, diceAnimation, disableElement, enableElenet, getNode, getNodes, insertLast, invisibleElement, memo, visibleElement} from './lib/index.js'

// 설정한 초마다 호출
// setInterval(()=>{
//   console.log("안녕")
// },1000)

// 배열의 구조분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper')

memo('@tbody', ()=>{getNode('recordListWrapper tbody')})

let count = 0;
let total = 0;

const renderRecordListItem = () => {
  let diceValue = +attr(memo('cube'),'data-dice')
  let template = /* html */`
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
  `
  insertLast(memo('@tbody'),template)
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
  return template
}


// event영역

const handlerRollingDice = (() =>{
  let stopAnimation;
  let isRolling = false;
  return () =>{
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation,100)
      disableElement(recordButton)
      disableElement(resetButton)
    }else{
      clearInterval(stopAnimation)
      enableElenet(recordButton)
      enableElenet(resetButton)
    }
    isRolling = !isRolling
  }

})()

const recordHandler = () =>{
  visibleElement(recordListWrapper)

  renderRecordListItem();
}

const resetHandler = () =>{
  count = 0;
  total = 0;
  invisibleElement(recordListWrapper)
  clearContents(memo('tbody'))
  
}

rollingDiceButton.addEventListener('click', handlerRollingDice)
recordButton.addEventListener('click',recordHandler)
resetButton.addEventListener('click',resetHandler)