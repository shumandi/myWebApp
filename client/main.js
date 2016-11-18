import React, { Component } from 'react';
import { render } from 'react-dom';

var names = ['Alice', 'Emily', 'Kate'];



window.onload = () => {
  render(
    <div>
    {
    names.map(function(name) {
      return <div>Hello, {name}!</div>
    })
    }
    </div>,
    document.getElementById('root')
  );
}
