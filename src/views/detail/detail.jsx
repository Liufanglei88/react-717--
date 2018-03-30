import React, { Component } from 'react';
import {connect} from 'react-redux'
class Detail extends Component{
    constructor(){
        super()
        this.testSaga=this.testSaga.bind(this)
    }
    render(){
        return <h3>
            <p onClick={this.testSaga}>测试saga</p>
            </h3>
    }
    testSaga(){
      this.props.dispatch({
          type:'GET_GOODS_LIST'
      })
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default connect(function(state){
    console.log(state)
    return{
        goodList:state.good_list
    }
},null,null,{pure:false})(Detail);