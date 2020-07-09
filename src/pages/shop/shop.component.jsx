import React,{Component} from 'react';
import PreviewCollection from '../../components/collection/previewcollection.component';
import './shop.style.scss';
import SHOP_DATA from './shop.data.js';
class Shop extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }
    
    render(){
        const {collections} = this.state;
        
        return(
            <div className="shop-page">
                {
                    collections.map(({id,...OtherStateProps})=>(
                    <PreviewCollection key={id} {...OtherStateProps}/>
                    ))
                }
            </div>
        )
    }
    
}

export default Shop;