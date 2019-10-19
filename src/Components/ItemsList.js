import React, {Component} from 'react';

class ItemsList extends Component {
    render(){

        return (
            <div>
                {this.props.items.map( item => <p>Ciao {item}</p>)}
            </div>
        );
    }

}

export default ItemsList;
