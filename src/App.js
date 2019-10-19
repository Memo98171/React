import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    let names = ['Memo', 'Giovanni']
    return (
        <div className="App">
          <header>
            {names.map( name => <p>Ciao {name}</p>)}
          </header>
        </div>
    );
  }

}

export default App;
