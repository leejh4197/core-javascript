import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

// 타입스크립트 비슷한 기능(Jsdoc)
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return {disabled} set disabled 
 */

export const disableElement = (node)=>{
    if(node.nodeType !== document.ELEMENT_NODE){
        typeError('disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
    }
    node.disabled = true;
}

export const enableElenet = (node) =>{
    if(!isElement(node)){
        typeError('enableElement 함수의 인자는 DOM 오소 노드 이어야 합니다.')
    }
    node.disabled = false
}

export const visibleElement = (node) =>{
    if(!isElement(node)){
        typeError("string형 이어야 합니다")
    }
        node.hidden = false;
    
}

export const invisibleElement = (node) =>{
    if(!isElement(node)){
        typeError("string형 이어야 합니다")
    }
        node.hidden = true;
    
}
