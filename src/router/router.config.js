import React, { Component } from "react";
import Index from "../views/index";
import Home from "../views/home";
import Cart from "../views/cart";
import Catagory from "../views/catagory";
import Mine from "../views/mine";
import Search from "../views/search";
import Login from "../views/login";
import Register from "../views/register";
import Detail from "../views/detail";
import Result from "../views/result";
import Setting from "../views/setting";
import Consignee from "../views/consignee";
import Deliverylist from '../views/deliverylist'
let router = {
  routers: [
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/setting",
      component: Setting
    },
    {
      path: "/consignee",
      component: Consignee
    },
    {
      path: "/deliverylist",
      component: Deliverylist
    },

    {
      path: "/index",
      component: Index,
      children: [
        {
          path: "/index/home",
          component: Home
        },
        {
          path: "/index/catagory",
          component: Catagory
        },
        {
          path: "/index/cart",
          component: Cart,
          authorization: true //权限管理
        },
        {
          path: "/index/mine",
          component: Mine,
          authorization: true //权限管理
        },
        {
          path: "/index/search",
          component: Search
        },
        {
          path: "/index/result",
          component: Result
        }
      ]
    }
  ]
};
export default router;
