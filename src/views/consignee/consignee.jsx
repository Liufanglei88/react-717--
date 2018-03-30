import React, { Component } from 'react';
import './consigness.css'
class Consignee extends Component{
    constructor(){
        super()
    }
    render(){
        return <div id="container">
    	<header>
    		<a href="javascript:;">
    			<img className="return" src={require('../../static/images/return.png')} />
    		</a>
			<p className="gosh">收货人</p> 
    	</header>
    	
			<div id="main">	
			<form id="address_form" method='post' action='#'>
				<p className="Use_r"><input type="text" id='consignee' name="consignee" placeholder="收货人姓名"/></p>
				<p className="Use_phone"><input type="number" id='mobile' name='mobile' placeholder=" 手机号"/></p>
			<nav>
				<div className="select">
					<span className="opt"></span>
	  				<select id='province' name='province_id' >
	  					<option value='0'>请选择省</option>
	  					
	  				</select>
				</div>	
				<div className="select">
					<span className="opt"></span>
	  				<select id='city' name="city_id">
		      			<option value='0'>请选择市</option>
	  				</select>
				</div>
			</nav>
			<section>
				<div className="select">
					<span className="opt"></span>
	  				<select id='district' name='district_id'>
		      			<option value='0'>请选择区</option>
	  				</select>
				</div>				
			</section>
		
			<div className='addes'>
				<p className="Use_Adders"><input type="text" name='address' id='address' placeholder="详细地址"/></p>				
			</div>
			<div className="defc">
				<span className="bgsa bgss"></span><input type='hidden' name='is_default' value='1'/><p>设为默认地址</p>
			</div>
				<input type='hidden' id='address_id' name='address_id' value='0'/>
				<p className="keep">保存</p>
			</form>	
			</div>
		
		</div>
    }
}
export default Consignee;