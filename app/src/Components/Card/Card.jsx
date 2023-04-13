import React from 'react';
import './CardStyle.css';

function Card(props){
    return (
        <div className='card-wrapper'>
            <img src={props.img} alt='img' />
            <div className='title'>{props.title}</div>
        </div>
    );
};

export default Card;