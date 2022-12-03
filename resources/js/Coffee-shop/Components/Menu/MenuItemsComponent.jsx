import React from 'react'
import MenuItem from './MenuItem'

function MenuItemsComponent() {
  return (
     <div class='menu__1--espresso'>
      <div>
        <h3>ESPRESSO COFFEE</h3>
      </div>
      <div class='menu__1--espresso espresso'>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Espresso' price='3.8' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Doulespresso' price='4.9' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Americano' price='5' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Espresso machiato' price='4.3' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Cappuchino' price='5.2' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Flat white' price='5.9' />
        </div>
        <div class='menu__1--espresso espresso__item'>
          <MenuItem name='Extra shot' price='1.1' />
        </div>
      </div>
    </div>
  )
}

export default MenuItemsComponent