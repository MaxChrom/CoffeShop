import React from 'react'
import { useState, useEffect } from 'react'

function Category({
  title,
  children,
  isActive,
  onShow, 
}) {

    return (
      <>
        
        {isActive ? (
            <>
            <button onClick={onShow}>
                <div className={title}>
                    <p>{title}</p>
                </div>
            </button>
            {children}
            </>
        ) : (
           
            <button onClick={onShow}>
                <div className={title}>
                    <p>{title}</p>
                </div>
            </button>
            
        )}
    </>
    )

}

export default Category