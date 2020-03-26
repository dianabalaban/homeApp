import React from 'react';
import './App.css';
import Landing from './Landing';
import InvItem from './InvItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact component={Landing} />
        <Route path="/products"  component={InvItem} />
      </div>
    </Router>
  );
}

export default App;
