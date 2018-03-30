import React, { Component ,Fragment} from 'react';
import './search.css'
class Search extends Component{
    constructor(){
        super()
        this.state={
            histList:[]
        }
        this.ToSearch=this.ToSearch.bind(this)
        this.clearStore=this.clearStore.bind(this)
    }
    render(){
        return <Fragment>
            <header>
    	    <div className="searchBox">
                <i><img src={require("../../static/images/serach.png")}/></i>
                <input type="text" className="search" id="searchName"ref='keyWords' placeholder="请输入您要购买的商品" autoComplete='off'/>
            </div>
            {/* <span className='return' id="cancel">取消</span> */}
             <span className='return-back' id="searchCentent" onClick={this.ToSearch}>搜索</span>
    	</header>
		<div id="main">
           <nav className='nav'> 
                <span>最近搜索</span><img  id="del" src={require("../../static/images/remo.png")} alt="" onClick={this.clearStore}/>
           </nav>
           <div className="food">
            {
                 
                 this.state.histList.length==0?  <label id="result"><div className='food'>暂无搜索记录...</div>
               </label>:this.state.histList.map((item,ind)=>{
                        return <span onClick={()=>this.toResult(item)} key={ind}>{item}</span>
                    })
               
                
            }
           </div>
           <div className="section">
            <h4>大家都在搜</h4>
                            <a href="/mobile/search/getSearchGoods?content=粽子&from_uid=87591"><span >粽子</span></a>
			                <a href="/mobile/search/getSearchGoods?content=锅巴&from_uid=87591"><span >锅巴</span></a>
			                <a href="/mobile/search/getSearchGoods?content=酱&from_uid=87591"><span >酱</span></a>
			                <a href="/mobile/search/getSearchGoods?content=小吃&from_uid=87591"><span >小吃</span></a>
			                <a href="/mobile/search/getSearchGoods?content=零食&from_uid=87591"><span >零食</span></a>
			                <a href="/mobile/search/getSearchGoods?content=干果&from_uid=87591"><span >干果</span></a>
			                <a href="/mobile/search/getSearchGoods?content=特产&from_uid=87591"><span >特产</span></a>
			                <a href="/mobile/search/getSearchGoods?content=油&from_uid=87591"><span >油</span></a>
			                <a href="/mobile/search/getSearchGoods?content=大米&from_uid=87591"><span >大米</span></a>
			                <a href="/mobile/search/getSearchGoods?content=面粉&from_uid=87591"><span >面粉</span></a>
               
           </div>

		</div>
        </Fragment>
    }
    clearStore(){
        localStorage.removeItem('SearchHistory')
        this.setState({
            histList:[]
        })
    }
    toResult(keyWords){
        this.props.history.push('/index/result',{
            key_words:keyWords
        })
    }
    ToSearch(){
        if(!this.refs.keyWords.value) return;
        let keyWords = this.refs.keyWords.value;
          if(localStorage.getItem('SearchHistory')){
              let shArr = JSON.parse(localStorage.getItem('SearchHistory'));
              if(shArr.indexOf(keyWords)>-1)return;
              shArr.push(keyWords);
              localStorage.setItem('SearchHistory',JSON.stringify(shArr))
          }else{
              localStorage.setItem('SearchHistory',JSON.stringify([keyWords]))
          }
          this.props.history.push('/index/result',{
            key_words:keyWords
          })
        
    }
    componentDidMount(){
        if(localStorage.getItem('SearchHistory')){
            this.setState({
                histList:JSON.parse(localStorage.getItem('SearchHistory'))
            })
        }
    }
}
export default Search;