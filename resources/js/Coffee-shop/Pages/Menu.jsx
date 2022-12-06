import React from 'react'
import MenuItemsComponent from '../Components/Menu/MenuItemsComponent'
import coffeMachine from "../../../../public/Images/espresso-machine.jpg"
import "../Styles/Menu.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'
function Menu() {

    const [coffees, setCoffees] = useState(null)
    console.log(coffees)
    const loadAllCoffees = async() => {
        const response = await axios.get('/api/coffees');
        setCoffees(response.data)
    }

    useEffect(() => {
      loadAllCoffees()
        
    }, [])
    
  return (
    <div className='menu'> 
        <h2>MENU</h2>
        {
        coffees ?
            coffees.map(coffee => {
                return(
                        <div className="menu__item">
                            <p>{coffee.name}</p>
                            <p>$ {coffee.price}</p>
                            <hr /><br />
                        </div>
                )
            }): ""
        }
    </div>
  )
}

export default Menu