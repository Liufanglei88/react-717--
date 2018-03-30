import React, { Component } from 'react';
import './delivery.css'
class DeliveryList extends Component{
    constructor(){
        super()
        this.toConsigness=this.toConsigness.bind(this)
    }
    render(){
        return 	<p className="address" onClick={this.toConsigness}>
          <img src={require('../../static/images/add.png')}/>
          新增加地址
        </p> 
    }
    toConsigness(){
        this.props.history.push({
            pathname:'/consignee'
        })
    }
}
export default DeliveryList;