import React from 'react';
import StudentClass from './StudentClass.js';
import './App.css';

var student = [
  { name: 'Abror', id: 123456, status: 'HTM' },
  { name: 'Jobir', id: 155218, status: 'HTM' },
  { name: 'Xolid', id: 352112, status: 'IT' },
  { name: 'Husein', id: 177154, status: 'BA' },
  { name: 'Hassan', id: 545424, status: 'HTMusic' },
  { name: 'Nemat', id: 544512, status: 'CS' },
  { name: 'Abror', id: 454623, status: 'BHTM' },
  
];
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <StudentClass data={student} />
      </div>
    );
  }
}

export default App;
