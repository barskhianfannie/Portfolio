import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Personal Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/Portfolio/images/stocks.png'
              text='Stocks Visualizer App'
              description = "Stocks Visualizer with graphs displaying various trends from API data."
              label='Python'
              path='https://github.com/barskhianfannie/Stocks-Visulizer'
            />
            <CardItem
              src='/Portfolio/images/sql.png'
              text='SQL Database'
              description = "SQL Database built from scratch using various data structures."
              label='C++'
              path='https://github.com/barskhianfannie/StackQueue'
            />
             <CardItem
              src='/Portfolio/images/graphingcalc.png'
              text='Graphing Calculator'
              description = "Graphing Calculator built using SFML framework and the shunting yard algorithm."
              label='C++'
              path='https://github.com/barskhianfannie/Graphing_Calculator'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/Portfolio/images/datatrainer.png'
              text='Neural Network'
              description = "Neural Network simulator to train data in automated driving."
              label='Python'
              path='/Portfolio'
            />
            <CardItem
              src='/Portfolio/images/struct.png'
              text='Self Built Objects'
              label='C++'
              path='https://github.com/barskhianfannie/Objects'
            />
            <CardItem
              src='/Portfolio/images/website.png'
              text='My Website'
              description = "Built this website to teach myself React, JavaScript, and CSS."
              label='React / JS / CSS'
              path='https://github.com/barskhianfannie/Portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
