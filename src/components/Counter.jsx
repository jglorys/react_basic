import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0); 
    //초기값을 0으로 셋팅했고, useState호출하면 배열이 전달됨
    // 0 : 변수, 1: 업데이트 하는 함수
    return (
        <div className='counter'>
            <p className='number'>{count} 
                <span className='total'>/{total}</span>
            </p>
            <button 
            className='button' 
            onClick={()=>{
                setCount((prev) => prev+1);
                onClick();
            }}>Add +</button>
        </div>
    );
}