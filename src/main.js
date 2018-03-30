import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {Provider} from 'react-redux'
import store from './store/store'
// font  & common style set
import './static/font/iconfont.css'
import './static/css/reset.css';
import './static/css/common.css'
// import './static/css/base.css'
import fontset from './utils/fontset'
import Toast from 'react-toast-mobile';
import 'react-toast-mobile/lib/react-toast-mobile.css'
console.log(process.env);
ReactDOM.render(<Fragment><Provider store={store}><App/></Provider><Toast/></Fragment> , document.getElementById("root"));
