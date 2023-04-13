import React, { useEffect, useState } from 'react';
import './CatalogStyle.css';
import Card from '../Components/Card/Card';

function Catalog(){
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
    return (
        <div className='content-wrapper'>
            {
                data ? data.map((value,index)=>(
                    <Card
                        id={value.id}
                        title={value.title}
                        img={value.src}
                    />
                )):''
            }

        </div>
    );
};

export default Catalog;