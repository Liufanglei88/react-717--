import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import mapStateToProps from "./state";
import mapDispatchToProps from "./dispatch";
import CartItem from "../../components/cartItem/cartItem";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state={
        str:'all',
        edit:'编辑',
        pay:'结算'
    }
    this.cartEdit=this.cartEdit.bind(this)
    this.toDelGoods=this.toDelGoods.bind(this)
  }
  render() {
    let { cartList,totalCost,selectAll,selectedAll} = this.props;
    let {str,edit,pay}=this.state;
    return (
      <div className="wrap-contianer">
        <header className="head">
          <p className="gosh">
            购物车<span className="edit" onClick={this.cartEdit}>{edit}</span>
          </p>
          <span className="spbg" />
        </header>
        <div id="sections">
          {cartList.length == 0 ? (
            <div>
              <img
                className="messages"
                src={require("../../static/images/a4.jpg")}
              />
              <p className="tips">购物车为空啊。。。</p>
            </div>
          ) : (
            cartList.map((item, ind) => {
              return <CartItem item={item} key={"cartItem" + ind} />;
            })
          )}
        </div>

        <div className="acc">
          <span className={"bgss iconfont "+(selectAll?'icon-duihao':"") } onClick={()=>{
             this.setState({
                str:str=='all'?'':'all'
             })
              selectedAll(str)}} />
          <p className="all">全选</p>
          <p>
            <label>
              <b>合计:</b>
              <span className="bop">￥</span>
              <span className="pla">{totalCost.toFixed(2)}</span>
              <small>
                运费:￥<span className="bop">186</span>
              </small>
            </label>
          </p>
          <p className="balan" onClick={this.toDelGoods}>{pay}</p>
        </div>
      </div>
    );
  }
  cartEdit(){
     this.setState({
        edit:this.state.edit=='编辑'?'完成':'编辑',
        pay:this.state.pay=='结算'?'删除':'结算'
     })
  }
  toDelGoods(){
      if(this.state.pay=='结算') return;
      let selectedID=[]
      this.props.cartList.forEach(item=>{
          if(item.selected==1){
              selectedID.push(item.goods_id)
          }
      })
      this.props.delCartGoods(selectedID)
  }
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchGoodsList(this.props.history)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
