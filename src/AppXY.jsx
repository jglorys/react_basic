import React, { useState } from 'react';
import './AppXY.css';
import { click } from '@testing-library/user-event/dist/click';

export default function AppXY() {
    const [position, setPosition] = useState({x:0, y:0, z:0});
    return (
        <div className='container' onPointerMove={(e) => {
            // console.log(e.clientX, e.clientY);
            // setPosition({x: e.clientX, y: e.clientY});
            
            // 만약 수평으로만 이동이 가능하다면?
            // setPosition((prev) => ({x: e.clientX, y: prev.y}));

            setPosition((prev) => ({...prev, x: e.clientX}));
        }}>
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
                
            </div>
        </div>
    );
}

