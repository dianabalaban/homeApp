import React, { Component } from 'react';
import { connect } from "react-redux";
import { getGroceries } from './store/actions/groceryActions';

export class BuyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    componentDidMount() {

        let head = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        this.props.getGroceries(head)
      }
    render() {
        if(this.props.groceries){
        return (
            
                <form onSubmit={this.handleSubmit} className='addGroceriesForm'>
                    <div>
               {/* <label> <input type="checkbox" value="Pupici" name="Pupi"/>Pupici</label> */}
               {this.props.groceries.groceries.map(element => (<label key={element._id}> <input type="checkbox" value={element.name} name={element.name}/>{element.name}</label>))}
               </div>
               <div>
                    
                    <input type="text" value={this.productIn} onChange={this.productChange} className='addNewInput' required />
                   

                    <input type="submit" className="" value="Add" />
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
  
  export default connect(mapStateToProps, { getGroceries })(BuyList); 
  
