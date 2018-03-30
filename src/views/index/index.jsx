import React, { Component ,Fragment} from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./index.scss";
import RouterWrapper from "../../components/routerWrap/routerWrap.jsx";
import Home from "../home";
class Index extends Component {
  constructor() {
    super();
  }
  render() {
    let { routes } = this.props;
    return (
      <div className="index-wrap">
        <Fragment>
          <RouterWrapper routes={routes} />
        </Fragment>
        <footer>
          <NavLink to="/index/home" activeClassName="bga">
            <i className="iconfont icon-shouye" />
            <span>首页</span>
          </NavLink>
          <NavLink to="/index/catagory" activeClassName="bga">
            <i className="iconfont icon-shequ-active" />
            <span>分类</span>
          </NavLink>
          <NavLink to="/index/cart" activeClassName="bga">
            <i className="iconfont icon-gouwuche" />
            <span>购物车</span>
          </NavLink>
          <NavLink to="/index/mine" activeClassName="bga">
            <i className="iconfont icon-account" />
            <span>我的</span>
          </NavLink>
        </footer>
      </div>
    );
  }
}
export default Index;
