import React, { useEffect, useState } from 'react';
import './CatalogStyle.css';
import Card from '../../Components/Card/Card';

function Catalog(){
    const [data, setData] = useState();
    const [search, setSearch] = useState('');

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
        return element.title.toLowerCase().includes(search.toLowerCase())
    }):'';
    return (
        <div className='catalog-container'>
            <h1>Напольные покрытия</h1>
            <div className='search-wrapper'>
                <input className='search-input' type='text' placeholder='Поиск по каталогу' name='search' onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
            <div className='catalog-wrapper'>
                {
                    filteredData ? filteredData.map((value,index)=>(
                        <Card
                            key={index}
                            id={value.id}
                            title={value.title}
                            img={value.src}
                        />
                    )):'loading...'
                }
            </div>
        </div>
    );
};

export default Catalog;