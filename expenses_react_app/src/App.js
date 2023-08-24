import React from 'react';

import Employee from './components/Employees/Employee';
import NewEmployee from './components/NewEmployee/NewEmployee';

const App = () => {
  const employees = [
    {
      id: 'e1',
      name: 'John Doe',
      email: 'jd@email.com',
    },
    {
      id: 'e2',
      name: 'May Wong',
      email: 'mw@email.com'
    },
    {
      id: 'e3',
      name: 'Marie Smith',
      email: 'ms@email.com',
    },
    {
      id: 'e4',
      name: 'Joe Lee',
      email: 'jl@email.com',
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewEmployee />
      <Employee items={employees} />
    </div>
  );
}

export default App;
// import React from 'react';

// import Expenses from './components/Expenses/Expenses';

// const App = () => {
//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Laptop',
//       amount: 500,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 5, 16) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 299.99,
//       date: new Date(2023, 6, 16),
//     },
//     {
//       id: 'e4',
//       title: 'Chair',
//       amount: 100,
//       date: new Date(2023, 7, 16),
//     },
//   ];

//   // return React.createElement(
//   //   'div',
//   //   {},
//   //   React.createElement('h2', {}, "Let's get started!"),
//   //   React.createElement(Expenses, { items: expenses })
//   // );

//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <Expenses items={expenses} />
//     </div>
//   );
// }

// export default App;
