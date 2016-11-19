import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Ccc extends Component{
  constructor(props) {
    super(props);
    this.state = {
      res: null
    };
    let cc = new XMLHttpRequest();
    cc.onreadystatechange = ()=>{
      if (cc.readyState==4 && cc.status==200)
      {
        document.getElementById('root').innerHTML=cc.responseText;
      }
    };
    cc.get('GET','/ajax',true);
    cc.send();
  }
  render(){
    return (<h1>{this.state.res}</h1>)
  }
}

ReactDOM.render(
  <Ccc />,
  document.getElementById('root')
);
