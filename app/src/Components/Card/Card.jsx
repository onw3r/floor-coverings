import React from 'react';
import './CardStyle.css';
import { Link } from 'react-router-dom';

function Card(props){
    return (
        <div className='card-wrapper'>
            <Link to={'/catalog/'+ props.id}>
                <img className='card-img' src={props.img} alt='img' />
                <div className='title'>{props.title}</div>
            </Link>
            <button className='btn'>Добавить</button>
        </div>
    );
};

export default Card;