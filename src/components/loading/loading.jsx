import React, { Component } from 'react'
class Loading extends Component{
    constructor(){
        super()
    }
    render(){
        return <img src={require('../../static/images/loading-img.gif')}/>
    }
}
export default Loading;