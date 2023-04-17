import React from 'react';
import './MainStyle.css';
import Slider from '../../Components/Slider/Slider';


function Main() {
    return (
        <div className='content-wrapper'>
            <h1 className='main-title'>Напольные покрытия</h1>
            <Slider />
            <div className='about-company'>
                <h2 className='about-company-title'>О компании</h2>
                <div className='about-company-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque urna mauris, dignissim quis consectetur aliquet, commodo ut lacus. Ut quis nunc tincidunt, ultricies nisl in, auctor enim. Donec eget risus ac odio ornare luctus. Ut commodo quis eros quis accumsan. Morbi finibus mauris et velit sollicitudin, eu ultrices ipsum sollicitudin. Integer sit amet risus convallis, consequat nunc viverra, imperdiet turpis. Proin interdum arcu nec diam mattis interdum.

                Cras vestibulum vitae lacus id finibus. Sed efficitur eros at tortor euismod, non ullamcorper lacus maximus. Suspendisse nec ullamcorper sem. Cras tincidunt augue neque, et aliquet felis tincidunt et. Nullam consequat, justo vel rhoncus auctor, lorem tellus accumsan ex, nec auctor lorem dolor sit amet arcu. Sed nec tempus tellus, nec dignissim justo. Maecenas sit amet mauris non felis pharetra condimentum. Nullam eros nunc, elementum non accumsan vel, feugiat euismod ligula. Fusce finibus aliquam feugiat.

                Duis aliquam odio ut diam tempor rhoncus. Nunc at tincidunt ante. Vivamus ut varius neque. Donec pulvinar enim sit amet arcu sagittis sodales. Etiam vestibulum pharetra lectus vel mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex nibh, aliquam a placerat a, tristique tempor tortor. Donec ornare non erat vitae bibendum. Nam ornare ullamcorper rhoncus. Suspendisse sed lacus hendrerit elit ullamcorper sollicitudin vitae posuere metus. Curabitur condimentum, neque et fringilla ultricies, metus augue volutpat leo, vel egestas nisl metus tempus quam. Praesent molestie dignissim vulputate. Donec ut justo ac dui tempus iaculis. Quisque a lacinia eros.</div>
            </div>
        </div>
    );
};

export default Main;