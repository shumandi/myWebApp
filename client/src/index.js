import React from 'react';
import ReactDOM from 'react-dom';
import{Router,Route,hashHistory, IndexRoute} from 'react-router';
import App from './App';
import MdAbout from './MdAbout'
import MdmainScreen from './MdmainScreen';
import MdSignIn from './MdSignIn';
import MdLogIn from './MdLogIn';
import MdBlogMain from './MdBlogMain';
import MdBlogEdit from './MdBlogEdit';
import MdBlogPage from './MdBlogPage';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={MdmainScreen}/>
      <Route path='about' component={MdAbout}/>
      <Route path='signin' component={MdSignIn}/>
      <Route path='login' component={MdLogIn}/>
      <Route path='blogmain' component={MdBlogMain}/>
      <Route path='blogedit' component={MdBlogEdit}/>
      <Route path='blogpage' component={MdBlogPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
