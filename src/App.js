import React, {Component} from 'react';
import ItemsList from './Components/ItemsList';
import './App.css';

class App extends Component {
  render(){
    let names = ['Memo', 'Giovanni', 'Piercarlo']
    return (
        <div>
            <ItemsList items = {names}></ItemsList>
        </div>
    );
  }

}

export default App;
