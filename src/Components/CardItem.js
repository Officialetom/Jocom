import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="card_item">
          <Link className="card_items_link" to={props.path}>
              <figure className="card_item_pic" data-category={props.label}>
                  <img src={props.src} alt="Word_Image" className="card_image" />
              </figure>
              <div className="card_item_info">
                  <h3 className="card_text">{props.text}</h3>
              </div>
          </Link>
      </li>
    </>
  )
}

export default CardItem
