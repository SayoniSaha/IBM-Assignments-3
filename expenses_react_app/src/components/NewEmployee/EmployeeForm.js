import React, { useState } from 'react';

import './EmployeeForm.css';

const EmployeeForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className='new-employee__controls'>
        <div className='new-employee__control'>
          <label>Name</label>
          <input type='text' onChange={nameChangeHandler} />
        </div>
        <div className='new-employee__control'>
          <label>Email</label>
          <input type='text' onChange={emailChangeHandler} />
        </div>
      </div>
      <div className='new-employee__actions'>
        <button type='submit'>Add Employee</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
