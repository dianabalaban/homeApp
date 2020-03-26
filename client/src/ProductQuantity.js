import React, { Component } from 'react';
import { connect } from "react-redux";
import { addRemoveProducts } from './store/actions/addRemoveProductsActions';

export class ProductQuantity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'quantity': this.props.quantity
        }
    }

    addQty = (product_id) => (event) => {
        event.preventDefault();
        let quantity = { qty: 1, id: product_id }
        let head = {
            method: 'POST',
            body: JSON.stringify(quantity),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        this.setState({
            quantity: this.state.quantity + 1
        })

        this.props.addRemoveProducts(head);
    }

    removeQty = (product_id) => event => {
        event.preventDefault();
        let quantity = { qty: -1, id: product_id }
        let head = {
            method: 'POST',
            body: JSON.stringify(quantity),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.setState({
            quantity: this.state.quantity - 1
        });
        
        this.props.addRemoveProducts(head);

    }
    deleteProduct = (product_id) => event => {
        event.preventDefault();
        console.log('DELTE');
    }

    render() {

        return (
            <div className="inventary">
                <div className="invElement"> {this.props.name} </div>
                <div className="buttonsWrapper">
                    <button className="add" onClick={this.addQty(this.props.id)}></button>
                    <div className="quantity">{this.state.quantity}</div>
                    <button className="substract" onClick={this.removeQty(this.props.id)}></button>
                    <button className="remove" onClick={this.deleteProduct(this.props.id)}></button>
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        arproducts: state.products.products,
    }
}
export default connect(mapStateToProps, { addRemoveProducts })(ProductQuantity);
