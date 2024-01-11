import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({x:0, y:0, z:0});
    return (
        // 이벤트가 발생할 때는, event가 인자로 전달됨 (아래에서 "e")
        <div className='container' onPointerMove={(e) => {
            // console.log(e.clientX, e.clientY);
            // setPosition({x: e.clientX, y: e.clientY});
            
            // 만약 수평으로만 이동이 가능하다면?
            // setPosition((prev) => ({x: e.clientX, y: prev.y}));
            setPosition((prev) => ({...prev, x: e.clientX}));
            
            // ...prev : 다른 값들은 그대로 두겠다
            // 소괄호 안에 중괄호로 하는 이유 : 코드블럭인지 객체인지 구분하기 위해서
        }}>
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
                
            </div>
        </div>
    );
}

