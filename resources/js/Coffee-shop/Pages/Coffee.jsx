import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react'
function Coffee() {
    const [state, setState] = useState(null)
    console.log(state)
    const loadData = async() => {
        const response = await axios.get('/api/products')
        setState(response.data)
    }
    useEffect(() => {
        loadData()
    }, [])
  return (
    <div>Coffee</div>
  )
}

export default Coffee
