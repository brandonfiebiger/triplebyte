import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <div className="Card">
        {this.props.column !== 'Paul' ? <button>&larr;</button>: ''}
        { this.props.content }
        {this.props.column !== 'Kitten' ? <button>&rarr;</button>: ''}
      </div>
    )
  }
}