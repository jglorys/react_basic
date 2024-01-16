import React, { memo, useCallback, useMemo, useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    if (!prev) return;
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    if (!current) return;

    dispatch({type: 'updated', prev, current});
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
    if(!name) return;
    const title = prompt(`추가할 멘토의 정보를 입력하세요.`);
    if(!title) return;
    dispatch({type: 'added', name, title});
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`삭제할 멘토의 이름을 입력하세요.`);
    if(!name) return;
    const title = prompt(`삭제할 멘토의 정보를 입력하세요.`);
    if(!title) return;
    
    dispatch({type: 'deleted', name, title});
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate}/>
      <Button text='삭제하기' onClick={handleDelete}/>
      <Button text='멘토 추가하기' onClick={handleAdd}/>
    </div>
  );
}

function calculateSomething() {
    for (let i = 0 ; i < 10000 ; i++) {
        console.log('😃');
    }
    return 10;
}

const Button = memo(({text, onClick}) => {
    console.log('Button', text, 're-rendering 🤯');
    // 컴포넌트 내부에서 무언가 무거운 일을 하고, 매번 호출되기를 바라지 않는다면 useMemo를 사용하면 됨
    const result = useMemo(() => calculateSomething(), []);
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem',
            }}
        >
            {text}
        </button>
    );
});



const initialPerson = {
  name: 'ELLA',
  title: 'developer',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};