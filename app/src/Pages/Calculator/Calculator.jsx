import React, { useState } from 'react';
import './CalculatorStyle.css';

function Calculator() {
    const [roomLength, setRoomLength] = useState(0);
    const [roomWidth, setRoomWidth] = useState(0);
    const [floorLength, setFloorLength] = useState(0);
    const [floorWidth, setFloorWidth] = useState(0);
    const [flooringType, setFlooringType] = useState('');

    // Функция для вычисления количества требуемого напольного покрытия
    const calculateFlooring = () => {
        const roomArea = (roomLength * roomWidth)*100;
        const floorArea = floorLength * floorWidth;
        const numPlanks = Math.ceil(roomArea / floorArea);
        return numPlanks;
    };

    // Функция для рендеринга возможной раскладки
    const renderFlooringLayout = () => {
        const numPlanks = calculateFlooring();
        const layout = [];

        for (let i = 0; i < numPlanks; i++) {
            layout.push(<div key={i} className='cover' style={{ width: `${50}px`, height: `${50}px`}} />);
        }

        return layout;
    };

    return (
        <div>
            <h2>Калькулятор напольных покрытий</h2>
            <form>

                <label>
                    Длина напольной доски(мм):
                    <input type="number" value={floorLength} onChange={e => setFloorLength(e.target.value)} />
                </label>
                <br />
                <label>
                    Ширина напольной доски(мм):
                    <input type="number" value={floorWidth} onChange={e => setFloorWidth(e.target.value)} />
                </label>
                <br />
                <label>
                <label>
                    Длина комнаты(см):
                    <input type="number" value={roomLength} onChange={e => setRoomLength(e.target.value)} />
                </label>
                <br />
                <label>
                    Ширина комнаты(см):
                    <input type="number" value={roomWidth} onChange={e => setRoomWidth(e.target.value)} />
                </label>
                <br />
                    Тип напольного покрытия:
                    <select value={flooringType} onChange={e => setFlooringType(e.target.value)}>
                        <option value="laminate">Ламинат</option>
                        <option value="hardwood">Паркет</option>
                        <option value="tile">Керамическая плитка</option>
                    </select>
                </label>
            </form>
            <h3>Нужное количество напольных досок: {calculateFlooring()}</h3>
            <div className='preview'>
                {renderFlooringLayout()}
            </div>
        </div>
    );
};

export default Calculator;