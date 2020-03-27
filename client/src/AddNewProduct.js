import React, { Component } from 'react';
import { addNewProduct } from './store/actions/addNewProductActions';
import { connect } from "react-redux";


export class AddNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.productChange = this.productChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.noteChange = this.noteChange.bind(this);
        
    }
    productChange(event) {
        this.setState({ productIn: event.target.value });
    }
    quantityChange(event) {
        this.setState({ quantityIn: event.target.value });
    }
    noteChange(event) {
        this.setState({ noteIn: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
       
        let databody = {
            "product": this.state.productIn,
            "quantity": this.state.quantityIn,
            "note": this.state.noteIn,           
        }

        let body = {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.props.addNewProduct(body);
        this.props.history.push("/products");

    }
    render() {
        return (
            <div className="newProductWrapper">
                  <form onSubmit={this.handleSubmit}>
                    
                    <label className='addProductLabel'> Product:
                    <input type="text" value={this.productIn} onChange={this.productChange} className='inputProduct' required />
                    </label>
                    
                    <label className='addProductLabel'> Quantity:
                    <input type="number" className='inputProduct' step="1" value={this.quantityIn} onChange={this.quantityChange} required />
                    </label>
                    <label className='addProductLabel'>Notes: <textarea value={this.noteIn} onChange={this.noteChange} className='inputProduct'></textarea></label>

                    <input type="submit" className="addNewProductBtn" value="Add New Product" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      newproducts: state.products.products,   
    }
  }
  
  export default connect(mapStateToProps, { addNewProduct })(AddNewProduct); 
