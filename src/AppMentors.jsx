import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  // useReducer는 우리가 객체를 새롭게 만들어나갈 로직을 작성한 함수를 전달해주고, (personReducer)
  // 초기값을 전달해주면 (initialPerson)
  // 우리가 상태에 접근할 수 있는 변수와 (person)
  // 리듀서(personReducer)를 호출할 수 있는 dispatch라는게 있음
  // -> 우리가 setPerson을 이용해서 새로운 person을 업데이트 한것처럼
  //    dispatch를 이용해서 우리가 원하는 액션을 명령할 수 있음

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    if (!prev) return;
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    if (!current) return;

    dispatch({type: 'updated', prev, current});
    // -> dispatch가 호출되면
    //    useReducer가 자동으로 personReducer를 호출해주는데
    //    호출할때는 기존의 'person이라는 객체'와 'action 오브젝트'를 전달해줌

    // setPerson((person) => ({
    //   ...person, mentors: person.mentors.map( (mentor) => {
    //       if (mentor.name === prev) {
    //         return { ...mentor, name: current};
    //       } 
    //       return mentor;
    //     }
    //   )
    // }));
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
    if(!name) return;
    const title = prompt(`추가할 멘토의 정보를 입력하세요.`);
    if(!title) return;
    dispatch({type: 'added', name, title});

    // setPerson((person) => ({  
    //   ...person,
    //   mentors: [...person.mentors, {name, title}]
    // }));
  };

  const handleDelete = () => {
    const name = prompt(`삭제할 멘토의 이름을 입력하세요.`);
    if(!name) return;
    const title = prompt(`삭제할 멘토의 정보를 입력하세요.`);
    if(!title) return;
    
    dispatch({type: 'deleted', name, title});

    // setPerson((person) => ({
    //   ...person, 
    //   // mentors: person.mentors.map((mentor) => {
    //   //   if (mentor.name !== name || mentor.title !== title) {
    //   //     return mentor;
    //   //   } 
    //   // })
    //   mentors: person.mentors.filter((mentor) => mentor.name !== name || mentor.title !== title)
    // }))
  };
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
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}


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