import React from 'react';
import './App.css';
import Landing from './Landing';
import InvItem from './InvItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav'
import AddNewProduct from './AddNewProduct';
import BuyList from './BuyList'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact component={Landing} />
        <Route path="/products"  component={InvItem} />
        <Route path="/addproduct"  component={AddNewProduct} />
        <Route path="/groceries"  component={BuyList} />
      </div>
    </Router>
  );
}

export default App;
