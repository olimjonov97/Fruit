import React from 'react';
import './fruit.css';

function Fruit(value) {
  return (
    <div className='fruit_main'>
      <div className='img'>
        <img src={value.listofdata.img} width='100%' height='100%' />
      </div>
      <div className='details'>
        <div className='top'>
          <h1 className='h_one'>{value.listofdata.title}</h1>
          <button className='btn'>Add</button>
        </div>
        <div className='bottom'>
          <div className='data'>
            <p className='title'>UOM</p>
            <p className='value'>{value.listofdata.uom}</p>
          </div>
          <div className='data'>
            <p className='title'>PACK SIZE</p>
            <p className='value'>{value.listofdata.size}</p>
          </div>
          <div className='data'>
            <p className='title'>PER UNIT</p>
            <p className='value'>{value.listofdata.unit}</p>
          </div>
          <div className='data'>
            <p className='title'>TOTAL</p>
            <p className='value'>{value.listofdata.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Fruit;
