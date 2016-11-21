import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import{Router,Route,Link,hashHistory} from 'react-router';
import App from './App';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
