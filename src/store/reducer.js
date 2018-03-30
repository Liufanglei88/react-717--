import { combineReducers } from "redux";
//添加购物车
export const ADD_CART = "ADD_CART";
// 改变商品数量
export const UPDATE_GOODS_COUNT = "UPDATE_GOODS_COUNT";
// 改变商品选中与否
export const UPDATE_GOODS_SELECTED='UPDATE_GOODS_SELECTED'
// 更新整个商品列表
export const UPDATE_GOODS_LIST='UPDATE_GOODS_LIST';
//设置全选
export const SELECTED_ALL='SELECTED_ALL'
// 储存用户信息

export const USER_INFO='USER_INFO'
let initState = {
    card_list: [],
    user_info:null,
    goods_list:[]
};
function goods_list(state=initState.goods_list,action){
    if(action.type =='TEST_SAGA'){
        return action.data
    }
    return state;
}
function card_List(state = initState.card_list, action) {
    switch (action.type) {
        case ADD_CART:
        //去重商品
        let flag = false; // 新加的商品购物车里还没有
        state.forEach((item, ind) => {
            if (item.goods_id == action.data.goods_id) {
            ++item.count;
            flag = true;
            }
        });
        return flag ? [...state] : [...state, action.data]// 为truef返回本身
        break;
        case UPDATE_GOODS_COUNT:
        let arr=[...state]
        arr.forEach(item=>{
            if(item.goods_id==action.id){
                item.count=action.data;
            }
        })
        return arr;
        break;
        case UPDATE_GOODS_SELECTED:
        let arr1=[...state]
        arr1.forEach(item=>{
            if(item.goods_id==action.id){
                item.selected=action.data;
            }
        })
        return arr1;
        case UPDATE_GOODS_LIST:
          return action.data;
         break;
         case SELECTED_ALL:
            let arr2=[...state]
            let str=action.data;
            arr2.forEach(item=>{
                item.selected=str=='all'?1:0 
            })
            return arr2;
            break;
        default:
        return state;
    }
}
function user_info(state=initState.user_info,action){
    switch(action.type){
        case USER_INFO:
        return action.data;
        default:
        return {

        }
    }
}
export default combineReducers({
  card_List,
  user_info,
  goods_list
});
