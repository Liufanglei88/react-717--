import React, { Component } from "react";
import "./catagory.css";
import $http from "../../utils/http.js";
class Catagory extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      arrList:[]
    };
  }
  render() {
    let ListGoods = ["家乡味道","进口食品", "牛奶乳品", "休闲零食", "生鲜果蔬", "生鲜果蔬", "调味调料","酒水饮料"];
    let { arrList } = this.state;
    console.log(arrList)
    return (
      <div className="containerss ks-clear">
        <header className="top-head">
          <p className="blan">
            <img src={require("../../static/images/serach.png")} />
            <input
              className="txt1"
              id="searchName"
              type="text"
              placeholder="请输入你要购买的商品"
            />
          </p>
        </header>
        <div className="setSection">
          <section className="left" id="left">
            <ul id="left-ul">
              {ListGoods.map((item, ind) => {
                return (
                  <li
                    key={ind}
                    className={this.state.activeIndex == ind ? "bgli" : ""}
                    onClick={() => this.toggleActive(ind)}
                  >
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="right">
            <section className="contents ks-clear">
                  {
                    arrList.map((item,ind)=>{
                       return  <dl key={ind}>
                              <dt><img src={require(`../../${item.cate_icon}`)} alt=""/></dt>
                              <dd>{item.cate_name}</dd>
                          </dl>
                    })
                  }
            </section>
          </section>
        </div>
      </div>
    );
  }
  toggleActive(ind) {
    // $http.get('/mobile/Category/categorySon',{sonid:3}).then((res)=>{
    //   console.log(res)
    // })
    console.log(ind)
    fetch("/server/goodList.json").then(res => res.json()).then(res => {
      console.log(res.list[ind].id)
       if(ind==res.list[ind].id){
         console.log(res.list[ind].beautifulFood)
          this.setState({
            arrList:res.list[ind].beautifulFood
          })
       };
      });
      this.setState({
        activeIndex: ind
      });
  }
  componentDidMount(){
    this.toggleActive(0)
  }
}
export default Catagory;
