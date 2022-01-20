import React from 'react';
import StudentInfo from './StudentInfo.js';
var student = [
  { name: 'Abror', id: 17012640, status: 'HTM' },
  { name: 'Jobir', id: 15510215, status: 'HTM' },
  { name: 'Xolid', id: 3232112, status: 'IT' },
  { name: 'Husein', id: 170154, status: 'BA' },
  { name: 'Hassan', id: 545424, status: 'HTMusic' },
  { name: 'Nemat', id: 5454512, status: 'CS' },
  { name: 'Abror', id: 4546233, status: 'BHTM' },
];
class StudentList extends React.Component {
  render() {
    return (
      <div>
        <h1>This is StudentList</h1>
        <StudentInfo data={{ name: 'Abror' }} />
        <StudentInfo data={{ name: 'Akhror' }} />
        <StudentInfo data={{ name: 'Rivojid' }} />
        <StudentInfo data={{ name: 'Khabib' }} />
        <StudentInfo data={{ name: 'Maruf' }} />
        <StudentInfo data={{ name: 'Doston' }} />
        <StudentInfo data={{ name: 'Doston' }} />
        
      </div>
    );
  }
}
export default StudentList;
