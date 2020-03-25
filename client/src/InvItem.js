import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProducts } from './store/actions/productsActions';

export class InvItem extends Component {
    componentDidMount() {
        let newcomm = {'diana': 'diana'}
        let head = {
            method: 'POST',
            body: JSON.stringify(newcomm),
            headers: {
                'Content-Type': 'application/json'
            }
        }
         this.props.getProducts(head) 
    }
    render() {
        if(this.props.products) {
        return (
            this.props.products.map(product => (<div key={product._id} className="inventary">
            <div className="invElement">   {product.name} </div> 
            <div className="buttonsWrapper">
                 <button className="add"></button>
                 <div className="quantity">{product.quantity}</div>
                 <button className="substract"></button>
                 <button className="remove"></button>
            </div>
            
         </div>))
            
        ) } else return ''
    }
}


const mapStateToProps = (state) => {
    return {      
        products: state.products.products,
    }
}
export default connect(mapStateToProps, {  getProducts })(InvItem); 
