import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Interests() {
    return (
        <div className='cards'>
            <h1>Personal Interests</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='/Portfolio/images/blockchain.png'
                        text='Blockchain Technologies'
                        description = "Applciations of Blockchain technologies in every sector, particularly in finance and space."
                        label="Blockchain"
                        url='https://github.com/barskhianfannie/Stocks-Visulizer'
                        />
                        <CardItem
                        src='/Portfolio/images/radhard.png'
                        text='Radiation Hardened Electronics'
                        description = "Radiation Effects on present and future microelectronic technologies used on space craft."
                        label='Space'
                        url='https://github.com/barskhianfannie/StackQueue'
                        />
                        <CardItem
                        src='/Portfolio/images/brain.png'
                        text='Brain - Machine Interfaces'
                        description = "Developing software for brain and machine interaction."
                        label='Robotics'
                        url='https://github.com/barskhianfannie/Graphing_Calculator'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='/Portfolio/images/smartcity.png'
                        text='Smart Cities'
                        description = "Improving today's infrastructure to incorporate a strong technologically advanced foundation."
                        label='Infrastructure'
                        url='https://github.com/barskhianfannie/Graphing_Calculator'
                        />
                        <CardItem
                        src='/Portfolio/images/mining.png'
                        text='Space Mining'
                        description = "Resource mining in space to advance technology material reserves."
                        label='Resources'
                        url='https://github.com/barskhianfannie/Objects'
                        />
                        <CardItem
                        src='/Portfolio/images/data.png'
                        text='Data Visualization'
                        description = "Making more informed decisions utilizing data."
                        label='Data Science'
                        url='https://github.com/barskhianfannie/Portfolio'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Interests;
