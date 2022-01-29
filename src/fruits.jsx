import React from 'react';
import './fruits.css';
import Fruit from './fruit.js'
const data = [
  {
    id: 1,
    img: 'https://www.cppng.com/file/download/2020-06/7-2-apple-fruit-png.png',
    title: 'Apple',
    uom: '01',
    size: '02',
    unit: '$8.99',
    total: '$17.89',
  },
  {
    id: 2,
    img: 'https://media.istockphoto.com/photos/whole-cross-section-and-quarter-of-fresh-organic-navel-orange-with-picture-id1227301369?b=1&k=20&m=1227301369&s=170667a&w=0&h=7WdK1RQTLuCn5tuNe25Z999THYzj8yijmk0MaRE-SD0=',
    title: 'Orange',
    uom: '02',
    size: '05',
    unit: '$89',
    total: '$17.89',
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_W7hiYHJdBrsay6CxQHLRVBPWwNhY3gEEF1ZJO16qNEVRwyXdGIU82e-dwLf1Kgh_hs&usqp=CAU',
    title: 'Ananas',
    uom: '03',
    size: '07',
    unit: '$7.99',
    total: '$17.89',
  },
  {
    id: 4,
    img: 'https://imgk.timesnownews.com/story/1554896643-bananas.PNG?tr=w-400,h-300,fo-auto',
    title: 'Banana',
    uom: '04',
    size: '06',
    unit: '$9.99',
    total: '$17.89',
  },
  {
    id: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZCYdUMkSCVYvbk6dIKTnl_yOhMpObuRtqNKx8LvB728VXO3rOG18NPm0LjjLcDobhC4&usqp=CAU',
    title: 'Limon',
    uom: '05',
    size: '03',
    unit: '$8.09',
    total: '$12.89',
  },
  {
    id: 6,
    img: 'https://5.imimg.com/data5/YC/EX/MY-21550155/fresh-apricot-500x500.jpg',
    title: 'Apricot',
    uom: '06',
    size: '1',
    unit: '$10',
    total: '$10.89',
  },
];
class Fruits extends React.Component {
  render() {
      return <div className='container'>
        {
          data.map((value,index) => {
            return (
              <div>
                <Fruit listofdata={value}/> 
            </div>
            )
          })
        }
    </div>;
  }
}
export default Fruits;
