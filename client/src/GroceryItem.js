import React, { Component } from 'react'
import {updateGrocery} from './store/actions/updateGroceryActions';
import { connect } from "react-redux";

export class GroceryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.checked
        }
    
    }

    itemChecked = (id) => (event) => {
        console.log(event.target.checked);
        this.setState({isChecked: event.target.checked})
        let databody = {id: id, checked:event.target.checked}
        let body = {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        this.props.updateGrocery(body);
    }

    render() {
        if(this.state.isChecked)
        return (
            <label className="groceryElement checked" 
            key={this.props.id}> <input type="checkbox" 
            onChange={this.itemChecked(this.props.id)}
            defaultChecked
            value={this.props.name} 
            name={this.props.name} />
            {this.props.name}</label>
        )
        else return (
            <label className="groceryElement" 
            key={this.props.id}> <input type="checkbox" 
            onChange={this.itemChecked(this.props.id)}
            value={this.props.name} 
            name={this.props.name} />
            {this.props.name}</label>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        updategrocery: state.updategrocery,
    }
}

export default connect(mapStateToProps, { updateGrocery })(GroceryItem);

