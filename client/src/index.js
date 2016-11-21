import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import{Router,Route,Link,hashHistory, IndexRoute} from 'react-router';
import App from './App';
import MdAbout from './MdAbout'
import MdmainScreen from './MdmainScreen'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={MdmainScreen}/>
      <Route path='about' component={MdAbout}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
