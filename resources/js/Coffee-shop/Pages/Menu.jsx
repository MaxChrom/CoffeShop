import React from 'react'
import MenuItemsComponent from '../Components/Menu/MenuItemsComponent'
import coffeMachine from "../../../../public/Images/espresso-machine.jpg"
import "../Styles/Menu.scss"
function Menu() {
  return (
    <main>
        <section>
            <p>MENU</p>
        </section>
        <section class="menu">
            <div class="menu__1">
            <MenuItemsComponent/>
                <div class="menu__1--filter all">
                    <div class="menu__1--filter allin">
                        <div>
                            <h3>FILTER COFFEE</h3>
                        </div>
                        <div class="menu__1--filter filters">
                            <div class="menu__1--filter filters__item">
                                <h4>House Drip coffee</h4>
                                <p>4.5</p>
                            </div>
                            <div class="menu__1--filter filters__item">
                                <h4>Aeropress</h4>
                                <p>5.5</p>
                            </div>
                            <div class="menu__1--filter filters__item">
                                <h4>V60</h4>
                                <p>6.5</p>
                            </div>
                            <div class="menu__1--filter filters__item">
                                <h4>Kalita</h4>
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                    <div class="menu__1--special allin1">
                        <div>
                            <h3>COFFEE SPECIALITIES</h3>
                        </div>
                        <div class="menu__1--special special">
                            <div class="menu__1--special special1">
                                <h4>Cascara</h4>
                                <p>4.9</p>
                            </div>
                            <div class="menu__1--special special2">
                                <h4>Irish coffee</h4>
                                <p>10.9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__2">
                <div class="menu__2--iced">
                    <div>
                        <h3>ICED</h3>
                    </div>
                    <div class="menu__2--iced iced">
                        <div class="menu__2--iced iced-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__2--iced iced-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__2--iced iced-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__2--iced iced-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__2--iced iced-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__2--iced iced-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__2--iced iced-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                    </div>
                </div>
                <div class="menu__2--hot">

                    <div>
                        <h3>HOT</h3>
                    </div>
                    <div class="menu__2--hot hot">
                        <div class="menu__2--hot hot-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__2--hot hot-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__2--hot hot-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__2--hot hot-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__2--hot hot-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__2--hot hot-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__2--hot hot-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__3">
                <div class="menu__3--lemo">
                    <div>
                        <h3>LEMONADES</h3>
                    </div>
                    <div class="menu__3--lemo lemo">
                        <div class="menu__3--lemo lemo-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__3--lemo lemo-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__3--lemo lemo-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__3--lemo lemo-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__3--lemo lemo-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__3--lemo lemo-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__3--lemo lemo-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                    </div>
                </div>
                <div class="menu__3--water">

                    <div>
                        <h3>WATER</h3>
                    </div>
                    <div class="menu__3--water water">
                        <div class="menu__3--water water-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__3--water water-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__3--water water-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__3--water water-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__3--water water-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                        <div class="menu__3--water water-item">
                            <h4>Espresso</h4>
                            <p>3.8</p>
                        </div>
                        <div class="menu__3--water water-item">
                            <h4>Doublespresso</h4>
                            <p>4.9</p>
                        </div>
                    </div>

                </div>
                </div>
        </section>
        
        <img src={coffeMachine} alt="" />
            
    </main>
  )
}

export default Menu