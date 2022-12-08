import React from 'react'
import MenuItemsComponent from '../Components/Menu/MenuItemsComponent'
import coffeMachine from "../../../../public/Images/espresso-machine.jpg"
import "../Styles/Menu.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

function Menu() {
    const [menus, setMenus] = useState(null)
    console.log(menus)

    const [coffees, setCoffees] = useState(null)
    console.log(coffees)

    const loadCoffeesAndMenus = async() => {

        const responseCoffee = await axios.get('/api/coffees');
        setCoffees(responseCoffee.data)

        const responseMenu = await axios.get('/api/fullmenu');
        setMenus(responseMenu.data)
    }


    useEffect(() => {
      loadCoffeesAndMenus()
       
    }, [])
    
  return (
    <div className='background'>
        <h2>MENU</h2>
        <div className='menu'> 
            {
            menus ?
                menus.map(menu => {
                    return(
                            
                            <div className="menu__category">
                                <h3>{menu.name}</h3> 
                                <br />
                                {
                                    coffees ? 
                                        coffees.filter((coffee) => {
                                            return coffee.menu_id == menu.id
                                        }).map(item => {
                                            return (
                                                    <div className="menu__category-item">
                                                        
                                                            <p>{item.name} {item.price}$ </p>
                                                    </div>
                                                    )
                                        }) : (<div className="loader">
                                                 <CircularProgress color="inherit" />
                                            </div>)
                                }
                            </div>
                    )
                }): (<div className="loader">
                        <CircularProgress color="inherit" />
                    </div>)
            }
        </div>
    </div>
  )
}

export default Menu