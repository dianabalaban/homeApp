import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProducts } from './store/actions/productsActions';

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
    editQuantity = (event) => {
        event.preventDefault();
        
        if(this.state.editMode===0) {
            console.log('ACUM SE POATE EDITA')
            this.setState({editMode:1});
            document.getElementsByClassName('editMode')[0].innerHTML='Edit Mode'
        Array.from(document.getElementsByClassName('buttonsWrapper')).forEach(v=>
            {
                console.log(v);
                let z= v.getElementsByClassName('quantity');
                console.log(z[0]);
                console.log(z[0].innerHTML);
                let clone=z[0].cloneNode(true);
                v.innerHTML=''
                v.appendChild(clone);
                v.style.marginRight = "3em";
            }
          )
        } else {
            console.log('acum doar se poate vedea');
            this.setState({editMode:0}); 
            window.location.reload(false);
            document.getElementsByClassName('editMode')[0].innerHTML='View Mode'}
     
        
      
    }

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
           
            <div className='inventaryWrapper'>
           <button className="editMode" onClick={this.editQuantity}>View Mode</button> 
           <button className="addNewButton" onClick={this.editQuantity}>Add New</button>      
           <div><input
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
                        <button className="add"></button>
                        <div className="quantity">{product.quantity}</div>
                        <button className="substract"></button>
                        <button className="remove"></button>
                    </div>            
                 </div>)) :
                 
                 this.props.products.map(product => 
                    (<div key={product._id} className="inventary">
                        <div className="invElement"> {product.name} </div> 
                        <div className="buttonsWrapper">
                            <button className="add"></button>
                            <div className="quantity">{product.quantity}</div>
                            <button className="substract"></button>
                            <button className="remove"></button>
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
    }
}
export default connect(mapStateToProps, {  getProducts })(InvItem); 
