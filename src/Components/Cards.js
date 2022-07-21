import React from 'react'
import CardItem from './CardItem'
import { Link } from 'react-router-dom';
import './Cards.css';
import WLOGO from '../Components/Pages/microsoft-word.png'
import PLOGO from '../Components/Pages/POWERP.png'
import ELOGO from '../Components/Pages/excel.png'
import CLOGO from '../Components/Pages/corel.png'
import HLOGO from '../Components/Pages/html.png'
import CCLOGO from '../Components/Pages/css.png'
function Cards() {
  return (
   <div className="card">
       <h2>OUR COURSES</h2>
       <div className="card_container">
           <div className="card_wrap">
               <ul className="card_items">
                  
                       { props => (
                           <div style={props}>
                               
                           </div>
                       )}

                   
                <CardItem 
                src={WLOGO}
                text="Create Documents Like CV's, Resume's, Newsletters and more.."
                label='Microsoft Word'
                path='/courses'
                />
                <CardItem 
                src={PLOGO}
                text="Create Professional looking presentations with themes.."
                label='Microsoft PowerPoint'
                path='/courses'
                />
                <CardItem 
                src={ELOGO}
                text="Create and Work with Spreadsheet documents.."
                label='Microsoft Excel'
                path='/courses'
                />
                
               </ul>
               <ul className="card_items">                
                <CardItem 
                src={CLOGO}
                text="Create good and bright graphic designs with this package"
                label='Corel Draw'
                path='/courses'
                />
                <CardItem 
                src={HLOGO}
                text="Learn how to create website with HTML"
                label='HTML'
                path='/courses'
                />
                <CardItem 
                src={CCLOGO}
                text="Give style and nice look to your website using CSS"
                label='CSS'
                path='/courses'
                />
               </ul>
           </div>
           <Link to='/courses' className='more'><button className='more-btn'>More Courses..</button></Link>
       </div>
         
   </div>
    )
}

export default Cards
