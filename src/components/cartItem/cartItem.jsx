import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "./dispatch";
class CartItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    let { item, updateCount, toggleSelect } = this.props;
    return (
      <label>
        <dl className="dl">
          <span
            onClick={() => toggleSelect(1 - item.selected, item.goods_id)}
            className={
             item.selected == 0 ? "bgsa iconfont" : "bgsa iconfont icon-duihao"
            }
          />
          <b className="bgsb">
            <span
              className="cancel"
              onClick={() => updateCount(--item.count, item.goods_id)}
            >
              -
            </span>
            <span className="num">{item.count}</span>
            <span
              className="add"
              onClick={() => updateCount(++item.count, item.goods_id)}
            >
              +
            </span>
          </b>
          <a href="#">
            <dt>
              <img src={"http://www.lb717.com/" + item.obj_data} alt="" />
            </dt>
            <dd>
              <p>{item.goods_name}</p>
              <p>
                <b className="bgb" />
                <span className="count">x{item.count}</span>
              </p>
              <p>
                <b className="bgb2" />
                <span className="counts">￥{item.discount_price}</span>
              </p>
            </dd>
          </a>
        </dl>
      </label>
    );
  }
}
export default connect(null,mapDispatchToProps,null,{pure:false})(CartItem);
