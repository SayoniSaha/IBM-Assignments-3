import React from 'react';

import Card from '../UI/Card';
import './Employee.css';
import EmployeeName from './EmployeeName';

const Employee = (props) => {
  return (
    <Card className="employees">
      <EmployeeName
        name={props.items[0].name}
        email={props.items[0].email}
      />
      <EmployeeName
        name={props.items[1].name}
        email={props.items[1].email}
      />
      <EmployeeName
        name={props.items[2].name}
        email={props.items[2].email}
      />
      <EmployeeName
        name={props.items[3].name}
        email={props.items[3].email}
      />
    </Card>
  );
}

export default Employee;
