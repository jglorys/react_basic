import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = 'ella';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>eee</h2>
      <p>{name}</p>
      <ul>
        {
            list.map((item) => (<li>{item}</li>))
        }
      </ul>
      <img style={{ width: '200px', height: '200px'}}
      src='https://images.unsplash.com/photo-1694371390016-4e63941aec13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
    </>
  );
}

export default AppJSX;
