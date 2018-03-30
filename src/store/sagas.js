import {takeEvery,takeLatest} from 'redux-saga';
import {call,put} from 'redux-saga/effects'
import $http from '../utils/http'
// worker  saga
function* fetchData(){
    // 使用call去请求数据 call(fn,param)
    // 实现异步转同步
    try{
        let res = yield call($http.post,'/mall/index/getGoodsChannel',{channel_id:3})
        console.log(res)
        // 替代dispatch触发action函数
        yield put({
            type:"TEST_SAGA",
            data:JSON.parse(res)
        })
    }catch(err){
        yield put({
            type:"TEST_SAGA_ERROR",
            data:err
        })
    }
  

}
// watcher saga
export default function* watchFetch(){
   // 监听每一个type为GET_GOODS_LIST 的action
    yield takeEvery(['GET_GOODS_LIST'],fetchData)
}