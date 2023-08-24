import React from 'react';
import { useState } from 'react';

import Card from '../UI/Card';
import './EmployeeName.css';

const EmployeeName = (props) => {
  const [n_name, setName] = useState(props.name);
  console.log('Employee evaluated by React');

  const clickHandler = () => {
    setName('New Name');
    console.log(n_name);
  };
  return (
    <Card className='employee'>
      <div className='employee__name'>
        <h2>{n_name}</h2>
        <div className='employee__email'>{props.email}</div>
      </div>
      <button onClick={clickHandler} className='button'>Change Name</button>
    </Card>
  );
}

export default EmployeeName;
