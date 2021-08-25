import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article1 from './pages/articles/Article1';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/blog/article-01" component={Article1}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
