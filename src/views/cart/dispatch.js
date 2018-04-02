import $http from '../../utils/http';
require('isomorphic-fetch');
import {getCookie} from '../../utils/utils';
import {UPDATE_GOODS_LIST,SELECTED_ALL} from '../../store/reducer'
export default function mapDispatchToProps(dispatch){
    return {
        fetchGoodsList(history){
            $http.post('/user/Cart/goodsList',{
                token:getCookie('token')
            })
            .then(res=>{
                if(res.error==1){
                    history.push('/login',{
                        from:'/index/cart'
                    })
                } else {
                    dispatch({
                       type:UPDATE_GOODS_LIST,
                       data:res
                    })
                }
            })
        },
        selectedAll(str){
            dispatch({
                type:SELECTED_ALL,
                data:str
            })
        },
        delCartGoods(selectedID){
            $http.post('/user/Cart/delGOODS',{
                selectedID,
                token:getCookie('token')
            }).then(res=>{
                if(res.success==1){
                    dispatch({
                       type:UPDATE_GOODS_LIST,
                       data:res.leftGoods
                    })
                }
            })
        }
    }
}