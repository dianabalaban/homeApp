import React from 'react';
import './App.css';
import Landing from './Landing';
import InvItem from './InvItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/inventar"  component={InvItem} />
      </div>
    </Router>
  );
}

export default App;
