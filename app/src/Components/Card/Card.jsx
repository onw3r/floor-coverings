import React from 'react';
import './CardStyle.css';

function Card(props){
    return (
        <div className='card-wrapper'>
            <div>
                <img src={props.img} alt='img' />
                <div className='title'>{props.title}</div>
            </div>
            <button className='btn'>Добавить</button>
        </div>
    );
};

export default Card;