import React from 'react'
import MenuItemsComponent from './MenuItemsComponent'
function MenuItem(props) {
  return (
    <div class='menu__1--espresso espresso__item'>
      <h4>{props.name}</h4>
      <p>{props.price}</p>
    </div>
  )
}

export default MenuItem