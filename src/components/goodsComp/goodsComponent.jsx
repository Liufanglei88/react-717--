import React, { Component, Fragment } from "react";
import $http from "../../utils/http";
import Lazyload from "react-lazyload";
import Loading from "../loading/loading";
import { getCookie } from "../../utils/utils";
import { T } from 'react-toast-mobile';
import {connect} from 'react-redux'
import {ADD_CART} from '../../store/reducer'
class GoodsItem extends Component {
  constructor() {
    super();
    this.addCart = this.addCart.bind(this);
  }
  toDetail(goods_id) {
    console.log(goods_id);
    this.props.history.push("/detail?goods_id=" + goods_id, {
      goods_id: goods_id
    });
  }
  render() {
    let { data } = this.props;
    return (
      <div>
        <dl
          className="goods-item"
          onClick={() => {
            this.toDetail(data.goods_id);
          }}
        >
          <dt>
            <Lazyload
              placeholder={<Loading />}
              once
              overflow
              height={"100%"}
              debounce={200}
            >
              <img src={"http://www.lb717.com/" + data.obj_data} alt="" />
            </Lazyload>
          </dt>
          <dd>
            <p className="goods-detail">{data.goods_name}</p>
            <p>
              <span className="goods-price">￥{data.discount_price}</span>
              <img
                src={require("../../static/images/homeland3.png")}
                alt=""
                onClick={this.addCart}
              />
            </p>
          </dd>
        </dl>
      </div>
    );
  }
  addCart(e) {
    e.stopPropagation();
    let { data } = this.props;
    if (getCookie("token")) {
      $http
        .post("/user/Cart/addCart", {
          goods_id: data.goods_id,
          goods_info: data,
          token: getCookie("token")
        })
        .then(res => {
          console.log(res);
          if (res == 1) {
               T.notify('添加购物车成功');
               this.props.dispatch({
                  type:ADD_CART,
                  data:{
                    ...data,
                    count:1,//追加一个字段，统计数量
                    selected:0 // 控制选中出现的对号
                  }
               })
          } else {
               T.notify(res.info)
              this.props.history.push("/login", {
                from: this.props.location.pathname
              });
          }
        });
    } else {
      console.log(this.props.location);
        this.props.history.push("/login", {
          from: this.props.location.pathname
        });
    }
  }
}
export default connect(null)(GoodsItem);
