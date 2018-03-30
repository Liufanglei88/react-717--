import React, { Component } from 'react';
import './setting.css'
import {loginout} from '../../utils/utils'
import { T } from 'react-toast-mobile';
class Setting extends Component{
    constructor(){
        super()
        this.LoginOUT=this.LoginOUT.bind(this)
        this.return=this.return.bind(this)
    }
    render(){
        return <div id="containerop" className="wrapComp">
        <header>
            <ul>
                <li className="text-center">
                <a onClick={this.return}>
                <img src={require('../../static/images/return.png')}/></a>
            </li>
                <li className="text-center"><a href="#">设置</a></li>
                <li  className="text-right"><a href="#"></a></li>
            </ul>
        </header>
        <div id="main-flex">
            <section>     
            <h4 className='avatar'>我的头像 <span>
                <img id='avatar' src={require('../../static/images/default_avatar.png')} alt=""/></span>
            <img className='more' src={require('../../static/images/my15.png')}/>
            </h4>
            <ul>
                <li className='username'><span className='left-name'>用户名</span><span id="username">12312313</span>
                <img className='more' src={require('../../static/images/my15.png')}/></li>
                <li className='usercode'><span className='left-name'>我的二维码名片</span>
                    <span>
                <img src={require('../../static/images/erma.png')} alt="" className='mode' />
                </span>
                <img className='more' src={require('../../static/images/my15.png')}/>
                </li>
               <li className='mobile'>
               <span className='left-name'>绑定手机号</span>
               <img className='more' src={require('../../static/images/my15.png')}/>
               </li>
            </ul> 
        </section>
            <p className='remind' onClick={this.LoginOUT}>退出登录</p>
            
       
        </div>
    </div>
    }
    return(){
        this.props.history.push('/index/mine')
    }
    LoginOUT(){
        // T.alert({
        //     message: '是否退出登录状态',
        //     fn: () =>{
        //         loginout()
        //         this.props.history.push('/index/home')
        //     }
        // });
        T.confirm({
            message: '是否退出登录状态',
            option: [{
                text: '确定',
                fn: () => {
                    loginout()
                this.props.history.push('/index/home')
                }
            }, {
                text: '取消',
                fn: () => console.log('取消')
            }
           ]
        });
    }
}
export default Setting;