import React, { Component } from 'react';
import './login.css'
import $http from  "../../utils/http"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import mapDispatchToProps from './dispatch'
class Login extends Component{
    constructor(){
        super()
        this.toLogin=this.toLogin.bind(this)
    }
    render(){
        return (
        <div id="container" className="container">
        <header>
            <ul>
                <li  className="text-center"><a href="#" ><img src={require('../../static/images/return.png')} alt=""/></a></li>
                <li className="text-center"><a href="#">会员登录</a></li>
                <li  className="text-right"><Link to='/register'>注册</Link></li>
            </ul>
        </header>
            <div id="main">
                <section className="info">
                    <ul>
                        <li><a href=""><img src={require('../../static/images/number.png')} alt=""/></a>
                        <input type="number" placeholder="请输入您的手机号" name='user_mobile' ref='user_mobile'/></li>
                        <li><a href=""><img src={require('../../static/images/password.png')} alt=""/></a>
                        <input type="password" placeholder="请输入您的密码" name='user_password' ref="user_password"/>
                        </li>
                    </ul>
                    <div className="loadBut">
                        <p><button type='button' onClick={this.toLogin}>立即登录</button></p>
                        <a href="#">忘记密码 ? </a>
                    </div>
                </section>
            
            
                    <div className="title">
                        <p>使用第三方账号登录</p>
                        <span className="left"></span><span className="right"></span>
                    </div>
                    <div className="link">
                        <ul>
                            <li className='weixin_login'>
                                <a href="/mobile/personal/index">
                                    <dl>
                                        <dt><img src={require("../../static/images/weChat.png")} alt=""/></dt>
                                        <dd>微信</dd>
                                    </dl>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <dl>
                                        <dt><img src={require("../../static/images/qq.png")} alt=""/></dt>
                                        <dd>QQ</dd>
                                    </dl>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <dl>
                                        <dt><img src={require("../../static/images/micro-blog.png" )} alt=""/></dt>
                                        <dd>微博</dd>
                                    </dl>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>)
    }
    toLogin(){
        let {user_mobile,user_password }= this.refs;
            $http.post('/user/login',{
                username:user_mobile.value,
                password:user_password.value
            })
           .then(res=>{
               console.log(res)
               console.log(this.props)
               let from =this.props.location.state?this.props.location.state.from || 'index/home':'index/home'
               if(res.success==1){
                   // 用户信息存储一份到store中
                   this.props.saveUser(res.user)
                   // 用户信息存储到本地存储
                     localStorage.setItem('user-info',JSON.stringify(res.user))
                   //登陆成功后判断要跳转的页面
                document.cookie="token="+res.token;
                this.props.history.replace(from)

               }else{
                 alert('登录错误')
               }
             
           })
     }
}
export default connect(null,mapDispatchToProps)(Login);