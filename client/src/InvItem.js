import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProducts } from './store/actions/productsActions';
import ProductQuantity from './ProductQuantity'

export class InvItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: 0,
      search: 0
    }
  }
  filterData = (arr, search) => {
    console.log(arr)
    return arr.filter(el => el.name.toLowerCase().includes(search.toLowerCase()) )
  };
  editMode = (event) => {
    event.preventDefault();

    if (this.state.editMode === 0) {

      this.setState({ editMode: 1 });
      document.getElementsByClassName('editMode')[0].innerHTML = 'Edit Mode'
      Array.from(document.getElementsByClassName('buttonsWrapper')).forEach(v => {
        let z = v.getElementsByClassName('quantity');
        let clone = z[0].cloneNode(true);
        v.innerHTML = ''
        v.appendChild(clone);
        v.style.marginRight = "3em";
      }
      )
    } else {
      this.setState({ editMode: 0 });
      window.location.reload(false);
      document.getElementsByClassName('editMode')[0].innerHTML = 'View Mode'
    }
  }

  componentDidMount() {

    let head = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    this.props.getProducts(head)
  }

  render() {
    if (this.props.products) {
      return (
        <div className='inventaryWrapper'>
          <button className="editMode" onClick={this.editMode}>View Mode</button>
          <button className="addNewButton"  onClick={() =>this.props.history.push("/addProduct")} >Add New</button>
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
            </input>
          </div>

          {this.state.search ?

            this.state.filtered_products.map(product =>
              (<ProductQuantity
                value={product.quantity}
                key={product._id} name={product.name}
                quantity={product.quantity}
                id={product._id}>
              </ProductQuantity>
              ))
            :
            this.props.products.map(product =>
              (<ProductQuantity
                value={product.quantity}
                key={product._id} name={product.name}
                quantity={product.quantity}
                id={product._id}>
              </ProductQuantity>
              ))
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

export default connect(mapStateToProps, { getProducts })(InvItem); 
