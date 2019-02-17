import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <div className="Card">
        {this.props.column !== 'Paul' ? <button onClick={() => this.props.updateColumnLeft(this.props.id)}>&larr;</button>: ''}
        { this.props.content }
        {this.props.column !== 'Kitten' ? <button onClick={() => this.props.updateColumnRight(this.props.id)}>&rarr;</button>: ''}
      </div>
    )
  }
}