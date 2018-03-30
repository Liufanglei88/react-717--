import React, { Component, Fragment } from "react";
import RouterWrapper from "../../components/routerWrap/routerWrap.jsx";
import "./home.scss";
import SwiperComponent from "../../components/swiper/swiper";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import $http from "../../utils/http";
import GoodsItem from "../../components/goodsComp/goodsComponent.jsx";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      goodslist: [],
      channel_id: 2,
      caniquery: true,//是否可以请求新的数据
      flag: false
    };
    this.scrolling = this.scrolling.bind(this);
    this.toSearch=this.toSearch.bind(this);
  }
  toSearch(){
    console.log( this.props.history)
    this.props.history.push('/index/search')
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src={require("../../static/images/download.gif")} alt="" />
          </div>
          <div className="search">
            <i>
              <img src={require("../../static/images/serach.png")} alt="" />
            </i>
            <input type="text" placeholder="请输入您要购买的东西" onFocus={this.toSearch}/>
          </div>
          <div className="store">
            <dl>
              <dt>
                <img src={require("../../static/images/download.png")} alt="" />
              </dt>
            </dl>
          </div>
        </div>
        <section className="main" onScroll={this.scrolling} ref="scroller" id='wrapper'>
          <div ref="doc" className="doc" id='scroller'>
            <SwiperComponent />
            <div className="Goods-List ks-clear">
              <dl>
                <dt>
                  <img src={require("../../static/images/img1.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img2.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img3.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img4.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img5.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img6.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img7.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require("../../static/images/img8.png")} />
                </dt>
                <dd>家乡味道</dd>
              </dl>
            </div>
            <div className="advertise ks-clear">
              <div className="left-area">
                <span className="medis">食品商城</span>
              </div>
              <div className="right-area">
                <div className="swiper-container banner">
                  <div className="swiper-wrapper">
                    <p className="swiper-slide" style={{fontSize:'0.20rem'}}>
                      717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！
                    </p>
                    <p className="swiper-slide" style={{fontSize:'0.20rem'}}>
                      7.17安全食品商城周年庆，暑期放价嗨不停！
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dayBox">
              <div className="today">
                <span>
                  <i>
                    <img src={require("../../static/images/todayimg.png")} />
                  </i>
                  <label>天天特惠</label>
                  <small>每天有惊喜</small>
                </span>
                <p>
                  <a href="javascript:;">
                    更多<img
                      src={require("../../static/images/dayreturn.png")}
                    />
                  </a>
                </p>
              </div>
              <div className="coupon">
                <div className="coupon-left">
                  <a href="javascript:;">
                    <img src={require("../../static/images/home1.png")} />
                  </a>
                </div>
                <div className="coupon-right">
                  <div className="coupon-right-top">
                    <a href="javascript:;">
                      <img src={require("../../static/images/ruwei.png")} />
                    </a>
                  </div>
                  <div className="coupon-right-bottom">
                    <a href="javascript:;">
                      <img src={require("../../static/images/gaodian.png")} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="goods-list ks-clear">
              <div className="homelandBox">
                <h4 id="h4one">
                  <img
                    className="tit2"
                    src={require("../../static/images/1.png")}
                    alt=""
                  />
                  <img
                    className="tit1"
                    src={require("../../static/images/1.png")}
                    alt=""
                  />
                  <label>
                    <img
                      src={require("../../static/images/homelandlogo.png")}
                    />
                    <span>家乡味道</span>
                  </label>
                  <a href="javascript:;">
                    更多<img
                      src={require("../../static/images/homeland1.png")}
                    />
                  </a>
                </h4>
              </div>
              <div className="goods-list ks-clear">
                {this.state.goodslist.map((item, index) => {
                  return <GoodsItem key={index} data={item} history={this.props.history} location={this.props.location}/>;
                })}
              </div>
            </div>
            {this.state.flag == true ? (
              <span className="fot">我是有底线的...</span>
            ) : null}
          </div>
        </section>
      </Fragment>
    );
  }
  scrolling() {
    if (this.state.channel_id > 9) {
      this.setState({
        flag: true
      });
      return;
    } else {
      this.setState({
        flag: false
      });
    }

    if (!this.state.caniquery) return;
        let { scroller, doc } = this.refs;
        let st = scroller.scrollTop;
        let sw = scroller.offsetHeight;
        let dh = doc.offsetHeight;

    if (dh - (st + sw) < 50) {
      this.setState({
        caniquery: false
      });
      console.log("满足条件，请求数据");
      this.setState({
        channel_id: ++this.state.channel_id
      });
      let { goodslist } = this.state;
      $http
        .post("/mall/index/getGoodsChannel", {
          channel_id: this.state.channel_id
        })
        .then(res => {
          this.setState({
            goodslist: [...this.state.goodslist, ...JSON.parse(res).data.data]
          });
          this.setState({
            caniquery: true
          });
        });
    }
  }
  componentDidMount() {
      
   
    $http.post("/mall/index/getGoodsChannel", {
        channel_id: this.state.channel_id
      })
      .then(res => {
        this.setState({
          goodslist: JSON.parse(res).data.data
        });
      });
    new Swiper(".banner", {
      direction: "vertical",
      loop: true, // 无缝
      autoplay: true
    });
    
  }
}
export default Home;
