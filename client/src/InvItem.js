import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProducts } from './store/actions/productsActions';
import { addRemoveProducts } from './store/actions/addRemoveProductsActions';

export class InvItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          editMode:0,
          search:0
        }       
    }
    filterData = (arr, search) => {
        return arr.filter(el => el.name.toLowerCase().includes(search.toLowerCase()) || el.notes.toLowerCase().includes(search.toLowerCase()))
    };
    editMode = (event) => {
        event.preventDefault();
        
        if(this.state.editMode===0) {
      
            this.setState({editMode:1});
            document.getElementsByClassName('editMode')[0].innerHTML='Edit Mode'
            Array.from(document.getElementsByClassName('buttonsWrapper')).forEach(v=>
              {               
                let z= v.getElementsByClassName('quantity');
                let clone=z[0].cloneNode(true);
                v.innerHTML=''
                v.appendChild(clone);
                v.style.marginRight = "3em";
              }
          )
        } else {
            this.setState({editMode:0}); 
            window.location.reload(false);
            document.getElementsByClassName('editMode')[0].innerHTML='View Mode'}      
    }

    componentDidMount() {
       
        let head = {
            method: 'POST',
            // body: JSON.stringify(newcomm),
            headers: {
                'Content-Type': 'application/json'
            }
        }
         this.props.getProducts(head) 
    }
    addQty = (product_id) => (event) =>{
        event.preventDefault();
        let quatity = {qty : 1, id:product_id}
        let head = {
            method: 'POST',
            body: JSON.stringify(quatity),
            headers: {
                'Content-Type': 'application/json'
            }
        }
         this.props.addRemoveProducts(head);
         window.location.reload(false);
    }

    removeQty = (product_id) =>event =>{
        event.preventDefault();
        let quatity = {qty : -1, id:product_id}
        let head = {
            method: 'POST',
            body: JSON.stringify(quatity),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.props.addRemoveProducts(head);
        window.location.reload(false);
    }
    deleteProduct = (product_id) =>event =>{
        event.preventDefault();
        console.log('DELTE');
    }
    render() {
        if(this.props.products) {
        return (
           <div className='inventaryWrapper'>
           <button className="editMode" onClick={this.editMode}>View Mode</button> 
           <button className="addNewButton" onClick={this.editMode}>Add New</button>      
           <div>
               <input
                className="searchBox"
                placeholder="Search here for a product..."
                type="text"
                name="name"
                onChange={(e) => {
                    this.setState({ search: 1 })
                    this.setState({ filtered_products: this.filterData(this.props.products, e.target.value) });
                }}>
                    </input></div>
           
            {this.state.search ? 
            this.state.filtered_products.map(product => 
                (<div key={product._id} className="inventary">
                    <div className="invElement"> {product.name} </div> 
                    <div className="buttonsWrapper">
                        <button className="add" onClick={this.addQty(product._id)}></button>
                        <div className="quantity">{product.quantity}</div>
                        <button className="substract" onClick={this.removeQty(product._id)}></button>
                        <button className="remove" onClick={this.deleteProduct(product._id)}></button>
                    </div>            
                 </div>)) :
                 
                 this.props.products.map(product => 
                    (<div key={product._id} className="inventary">
                        <div className="invElement"> {product.name} </div> 
                        <div className="buttonsWrapper">
                            <button className="add" onClick={this.addQty(product._id)}></button>
                            <div className="quantity">{product.quantity}</div>
                            <button className="substract" onClick={this.removeQty(product._id)}></button>
                            <button className="remove" onClick={this.deleteProduct(product._id)}></button>
                        </div>            
                     </div>))
                 }

         
                 </div> 
                 
                 ) 
        }
            else return ''
    }
}


const mapStateToProps = (state) => {
    return {      
        products: state.products.products,
        arproducts: state.products.products,
    }
}
export default connect(mapStateToProps, {  getProducts,addRemoveProducts })(InvItem); 
