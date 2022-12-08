import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { brown } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import '../../Styles/ProductItem.scss'
function ProductItem({
    name, discription, flavor, manufacturer, price
}) {

    const [itemCount, setItemCount] = useState(1);

    const theme = createTheme({
        palette: {
            primary: {
            main: brown[500],
            },
            secondary: {
            main: '#6F4E37',
            },
        },
        });


    return (
        <ThemeProvider theme={theme}>
            <div className='item'>
                <div className='item__container'>
                    <div className="item__container-info">
                        
                        <div className='item__container-counter'>
                            <p>{name}</p>
                            <p>{discription}</p>
                            <p>{price}$</p> 
                            <Button >More info</Button>
                           
                            <Badge color="secondary" badgeContent={itemCount -1}>
                            <ShoppingCartIcon />{" "}
                            </Badge>
                            <ButtonGroup>
                            <Button
                                onClick={() => {
                                setItemCount(Math.max(itemCount - 1, 0));
                                }}
                            >
                                {" "}
                                <RemoveIcon fontSize="small" />
                            </Button>
                            <Button
                                onClick={() => {
                                setItemCount(itemCount + 1);
                                }}
                            >
                                {" "}
                                <AddIcon fontSize="small" />
                            </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default ProductItem