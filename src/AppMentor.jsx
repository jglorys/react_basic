import React, { useState } from 'react';
import './AppXY.css';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '엘라',
        title: '개발자', 
        mentor: {
            name: '밥',
            title: '시니어개발자'
        }
    })
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button 
                onClick={() => {
                    const name = prompt(`what's your mentor's name?`);
                    setPerson((person) => ({...person, mentor: {...person.mentor, name}}));
                    // ...person : JS의 스프레드 문법!
                    // key와 value의 이름이 동일하므로 그냥 name: name => name으로 축약 (JS 문법)
                }}>
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);
                    setPerson((person) => ({...person, mentor: {...person.mentor, title}}));
                }}>
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}

