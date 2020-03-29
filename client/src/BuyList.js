import React, { Component } from 'react';
import { connect } from "react-redux";
import { getGroceries } from './store/actions/groceryActions';
import {addNewGrocery} from './store/actions/addNewGroceryActions';
import {deleteGrocery} from './store/actions/deleteGroceryActions';
import GroceryItem from './GroceryItem'

export class BuyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': this.props.name
        }
    this.nameChange = this.nameChange.bind(this);
    }
    componentDidMount() {
        this.getAll()
    }
    getAll =() => {
        let head = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.props.getGroceries(head)
    }
    nameChange(event) {
        this.setState({ nameIn: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
       
        let databody = {
            "name": this.state.nameIn,
        }
        let body = {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let x= document.getElementsByClassName('addNewInput');
        console.log(x)
        x[0].value=''
        
        this.props.addNewGrocery(body);
        this.getAll();   
       }
    deleteSelected = (event) =>{
        event.preventDefault();
   
        let body = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        this.props.deleteGrocery(body);
        this.getAll();
    }
    render() {
        
        if (this.props.groceries) {
            return (
                
                <form onSubmit={this.handleSubmit} className='addGroceriesForm'>
                  
                    <div>
                        <button className='clearSelected' onClick={this.deleteSelected}>Clear Selected</button>
                        {this.props.groceries.groceries.map(element => (
                            <GroceryItem id={element._id} name={element.name} key={element._id} checked={element.checked}></GroceryItem>
                          
                            ))
                        }
                        
                    </div>
                    
                    <div>
                        <input type="text" value={this.nameIn} onChange={this.nameChange} className='addNewInput' required />
                        <input type="submit" className="addGrocery" value="Add" />
                    </div>
                </form>
            )
        } else return 'nada'
    }
}


const mapStateToProps = (state) => {
    return {
        groceries: state.groceries,
    }
}

export default connect(mapStateToProps, { getGroceries,addNewGrocery,deleteGrocery })(BuyList);

