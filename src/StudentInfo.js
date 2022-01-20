import React from 'react';
import './student.css';

class StudentInfo extends React.Component {
  render() {
    const { data } = this.props;
    return <div className='StudentInfiContainer'>{data.name}</div>; 
  }
}
export default StudentInfo;
