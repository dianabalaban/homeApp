import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Nav extends Component {

    myFunction = (event) => {
        var findMenu = document.getElementById("Topnav");
        event.preventDefault();
        if (findMenu.className === "topNav") {
            findMenu.className += " responsive";
        } else {
            findMenu.className = "topNav";
        }
    }
  
    render() {
        
        return (
            <nav className="topNav" id="Topnav">

                <a href="/" className="navBorder">Home</a>
                <a href="/products" className="navBorder">Products</a>
                <a href="/groceries" className="navBorder">Groceries</a>
               
                <Link to="#" className="icon" onClick={this.myFunction}>
                    <i className="fa fa-bars"></i>
                </Link>
            </nav>
        )
    }
}

export default Nav;