import React, { Component } from "react";
import "./register.css";
import $http from "../../utils/http";
class Regist extends Component {
  constructor() {
    super();
    this.toRegister = this.toRegister.bind(this);
  }
  render() {
    return (
      <div id="container" className="container">
        <header>
          <ul>
            <li className="text-center">
              <a href="/mobile/user/login">
                <img src={require("../../static/images/return.png")} />
              </a>
            </li>
            <li className="text-center">
              <a href="">注册会员</a>
            </li>
            <li className="text-right">
              <a href="/mobile/user/login">登录</a>
            </li>
          </ul>
        </header>
        <div id="main">
          <section className="info">
            <ul>
              <li>
                <a href="">
                  <img src={require("../../static/images/number.png")} alt="" />
                </a>
                <input
                  type="text"
                  placeholder="请输入您的手机号"
                  name="user_mobile"
                  ref="user_mobile"
                />
              </li>
              {/* <li>
                    <a href="">
                    <img src={require('../../static/images/code.png')} alt=""/>
                    </a>
                    <input type="text" placeholder="请输入验证码" name='user_code'/>
                    <span className='send_code cod'>获取验证码</span></li> */}
              <li>
                <a href="">
                  <img
                    src={require("../../static/images/password.png")}
                    alt=""
                  />
                </a>
                <input
                  type="password"
                  placeholder="请输入您的密码"
                  name="user_password"
                  ref="user_password"
                />
              </li>
            </ul>
          </section>
          <div className="loadBut">
            <p>
              <button onClick={this.toRegister}>确定</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
  toRegister() {
    let { user_mobile, user_password } = this.refs;
     if(user_mobile.value==''||user_password=='')return;
           if(user_mobile.value.match(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/)){
                    $http.post("/user/register", {
                        username: user_mobile.value,
                        password: user_password.value
                        })
                        .then(res => {
                            console.log(res);
                            if(res.success==1){
                              this.props.history.push('/login')
                            }
                        });
      
            }else{
                alert('手机号或密码输入错误')
            }
     }
}
export default Regist;
