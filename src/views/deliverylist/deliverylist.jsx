import React, { Component } from 'react';
import './delivery.css'
import Header from '../../components/header'
class DeliveryList extends Component{
    constructor(){
        super()
        this.toConsigness=this.toConsigness.bind(this)
    }
    render(){
        let {history}=this.props;
        return 	<div>
              <Header history={history}>收货地址</Header>
            <section>
            <p className="address" onClick={this.toConsigness}>
          <img src={require('../../static/images/add.png')}/>
          新增加地址
        </p> 
            </section>
        </div>
    }
    toConsigness(){
        this.props.history.push({
            pathname:'/consignee'
        })
    }
   componentDidMount() {
        console.log(this.props)
    }
}
export default DeliveryList;