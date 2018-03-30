import React, { Component } from 'react';
import './mine.css'
import {connect} from 'react-redux';
import mapStateToProps from './state'
class Mine extends Component{
    constructor(){
		super()
		this.Setting=this.Setting.bind(this)
		this.toDeliveryList=this.toDeliveryList.bind(this)
    }
    render(){
		let {userInfo}=this.props;
		console.log(userInfo)
        return <div id="containered">
		<header className='head-mine'>
			<img className="Retruns" src={require("../../static/images/my1.png")} alt="" onClick={this.Setting}/>
			<p className="my">我的717商城</p>
		</header>
		<div id="main-section">

		<div className="information">
			<img id='avatar' src={require('../../static/images/default_avatar.png')}/>
			<p id='nickname'>{userInfo.nickName}</p>
		</div>
		<div className="paymentBox">
			<h3><label><img src={require("../../static/images/my9.png")} alt=""/>我的店铺</label><img src={require("../../static/images/my14.png")}/></h3>
			<ul>
				<li>
					<a href="#">
						<i><img src={require("../../static/images/my4.png")}/></i>
						<span>待付款</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i><img src={require("../../static/images/my5.png")}/></i>
						<span>待发货</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i><img src={require("../../static/images/my6.png")}/></i>
						<span>待收货</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i><img src={require("../../static/images/my7.png")}/></i>
						<span>售后</span>
					</a>
				</li>
				<li id="imgLi">
					<a href="#">
						<i><img src={require("../../static/images/my8.png")}/></i>
						<span>我的订单<img src={require("../../static/images/my15.png")} id="dianImg"/></span>
					</a>
				</li>
			</ul>
		</div>
		<div className="manageBox">
			<ol>
				<li id='my_t'>
					<a href="javascript:;">
					<label><img src={require("../../static/images/myhome.png")}/>我的社区</label><i><img src={require("../../static/images/my15.png")}/></i>
					</a>
				</li>
				<li id='money'>
					<a href="javascript:;">
					<label><img src={require("../../static/images/my10.png")}/>账户余额</label><i><img src={require("../../static/images/my15.png")}/></i>
					</a>
				</li>
				<li id='address' onClick={this.toDeliveryList}>
					<a href="javascript:;">
						<label><img src={require("../../static/images/my12.png")}/>地址管理</label><i><img src={require("../../static/images/my15.png")}/></i>
					</a>
				</li>
   			{/* <li>
					<label><img src={require("../../static/images/my11.png")}/>我的客服</label><i><img src={require("../../static/images/my15.png")}/></i>
				</li>  */}
			</ol>
		</div>
		<div className="mygroom">
				<h4>
					<label><img src={require("../../static/images/my16.png")}/><img src={require("../../static/images/my17.png")}/><span>热门推荐</span></label>
					
				</h4>
				<div className="mygroomlrt">
					
				</div>
				<div id='bootom'>到底了噢！...</div>
			</div>
		</div>
        </div>
	}
	toDeliveryList(){
		this.props.history.push('/deliveryList')
	}
	Setting(){
          this.props.history.push('/setting')
	}
	componentDidMount(){
		console.log(this.props)
	}
}
export default connect(mapStateToProps)(Mine);