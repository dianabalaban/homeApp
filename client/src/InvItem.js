import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsers } from './store/actions/cityActions';

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
         this.props.getUsers(head) 
    }
    render() {
        return (
            <div className="inventary">
                {this.props.users ? this.props.users[0].username   : ''}
               <div className="invElement">   a lot </div> 
               <div className="buttonsWrapper">
                    <button className="add"></button>
                    <div className="quantity">5</div>
                    <button className="substract"></button>
                    <button className="remove"></button>
               </div>
               
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {      
        users: state.users.users,
    }
}
export default connect(mapStateToProps, {  getUsers })(InvItem); 
