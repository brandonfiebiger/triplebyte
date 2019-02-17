import React, { Component } from 'react';
import './App.css';
import { Column } from './Column/Column';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: [{title: 'Paul', color:'#8E6E95'}, {title: 'Lemon', color:'#39A59C'}, {title: 'Orange', color:'#344759'}, {title: 'Kitten', color:'#E8741E'}],
      cards: [
        { content: "hello",column: 'Paul', id: 1 },
        { content: "hello",column: 'Paul', id: 2 },
        { content: "hello",column: 'Lemon', id: 3 },
        { content: "hello",column: 'Lemon', id: 4 },
        { content: "hello",column: 'Orange', id: 5 },
        { content: "hello",column: 'Orange', id: 6 },
        { content: "hello",column: 'Kitten', id: 7 },
        { content: "hello",column: 'Kitten', id: 8 },
      ]
    }
  }

  updateColumnRight = (id) => {
    const rightArrow = {
      'Paul': 'Lemon',
      'Lemon': 'Orange',
      'Orange': 'Kitten'
    }
    const alteredState = this.state.cards.map(card => {
      if (card.id === id) {
        card.column = rightArrow[card.column];
      }
      return card;
    })

    this.setState({
      cards: alteredState
    });
  }

  updateColumnLeft = (id) => {
    const leftArrow = {
      'Kitten': 'Orange',
      'Orange': 'Lemon',
      'Lemon': 'Paul'
    }
    const alteredState = this.state.cards.map(card => {
      if (card.id === id) {
        card.column = leftArrow[card.column];
      }
      return card;
    })

    this.setState({
      cards: alteredState
    });
  }

  
  addCard = (column) => {
    let newCard = {
      column,
    }
    newCard.content = window.prompt('Add a card');
    newCard.id = Date.now();
    

    this.setState({
      cards: [...this.state.cards, newCard]
    });
  }
  
  
  displayColumns = () => this.state.categories.map(category => {
    return <Column 
              updateColumnLeft={this.updateColumnLeft} 
              updateColumnRight={this.updateColumnRight} 
              addCard={this.addCard} 
              title={category.title} 
              color={category.color} 
              cards={this.state.cards.filter(card => card.column === category.title)}
            />;
  });



  render() {
    return (
      <div className="App">
        { this.displayColumns() }
      </div>
    );
  }
}

export default App;
