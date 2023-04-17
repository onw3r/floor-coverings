import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemStyle.css';

function Item(){
    const { id } = useParams();
    const [data, setData] = useState();
    const jsonFormat = function (response) {
        return response.json()
    }
    const fetchData = async () => {
        await fetch('https://moscow.fargospc.ru/test/json/')
            .then(jsonFormat)
            .then((data) => {
                setData(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const filteredData = data ? data.filter(element=>{
        return element.id.toLowerCase().includes(id)
    }):'';
    return (
        <div className='item-container'>
            <div className='item-wrapper'>
                <div>
                    <div className='item-title'>{filteredData ? filteredData[0].title : 'loading'}</div>
                        <div className='item-content'>
                            <img className='item-img' src={filteredData ? filteredData[0].src : 'loading'} alt='img' />
                            <span className='item-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel gravida libero. Vestibulum placerat ac lectus ac dictum. Nullam tempor, orci eget volutpat faucibus, turpis sapien pellentesque magna, vitae pellentesque velit quam ut lectus. Pellentesque et nibh rhoncus, porttitor nulla et, semper nisi. Fusce ac ipsum ac neque facilisis luctus. Aliquam tristique vestibulum enim, a blandit nulla ornare quis. Vivamus lectus leo, varius sed viverra et, consectetur congue justo. Cras pellentesque orci vitae rhoncus viverra. Vestibulum ac elit sed enim porta feugiat sit amet ut diam. Suspendisse eget pretium sapien, sed pretium arcu. Maecenas blandit nec odio efficitur condimentum.</span>
                    </div>
                </div>
                <button className='item-btn'>Добавить</button>
            </div>
        </div>

    );
};

export default Item;