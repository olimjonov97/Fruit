import React from 'react';
import StudentClass from './StudentClass.js';
import './App.css';

var student = [
  { name: 'Abror', id: 17012640, status: 'HTM' },
  { name: 'Jobir', id: 15510215, status: 'HTM' },
  { name: 'Xolid', id: 3232112, status: 'IT' },
  { name: 'Husein', id: 170154, status: 'BA' },
  { name: 'Hassan', id: 545424, status: 'HTMusic' },
  { name: 'Nemat', id: 5454512, status: 'CS' },
  { name: 'Abror', id: 4546233, status: 'BHTM' },
  
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
