/* 
  n个用于创建action对象的工厂函数
  同步action是对象：{type：'add'，data：3}
  异步action是函数：
    dispatch => {
      1.执行异步操作
      2.有结果后，dispatch（同步action对象）
    }
*/

import {
  DECREEMENT,
  INCREEMENT
} from '../action-types'

// 同步增加
export const increment = (number) => ({type:INCREEMENT,data:number})
// 同步增加
export const decrement = (number) => ({type: DECREEMENT, data: number})
// 异步增加
export const incrementAsync = (number,delayTime) => {
  return dispatch => {
    setTimeout(() => {
       dispatch(increment(number))
    }, delayTime);
   
  }
}


