import {diceAnimation, getNode} from './lib/index.js'

const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)')

// 설정한 초마다 호출
// setInterval(()=>{
//   console.log("안녕")
// },1000)

const handlerRollingDice = () =>{
  diceAnimation()
}

rollingDiceButton.addEventListener('click', handlerRollingDice)