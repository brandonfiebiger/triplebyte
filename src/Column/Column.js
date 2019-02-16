import React from 'react';
import './Column.css';
import { Card } from '../Card/Card';

export const Column = (props) => {

  const displayCards = () => props.cards.map(card => <Card column={card.column} content={card.content} id={card.id}/>);

  const backgroundColor = {
    background: props.color
  }

  const handleNewCard = () => {
    props.addCard(props.title);
  }

  return (
    <div className="Column">
      <h2 style={backgroundColor}>{ props.title }</h2>
      { displayCards() }
      <button onClick={handleNewCard}>+ Add Card</button>
    </div>
  )
}