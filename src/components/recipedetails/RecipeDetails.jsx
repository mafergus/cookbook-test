import React, { useEffect, useRef } from 'react'

const RecipeDetails = ({ data = {} }) => {
    const { author = '', name = '', description = '', img = '' } = data ?? {}
    const hasSelected = Object.values(data ?? {}).length > 0

    const ref = useRef()

    useEffect(() => {
        if (hasSelected) {
            ref?.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [ref?.current,data])
    
    return (
        <div ref={ref} className={`recipe-details${hasSelected ? ' has-selected-details' : ''}`}>
            
            
            {img && <img src={img} alt={name} />}
            <h1>{name}</h1>
            <h3>{author}</h3>

            <p>{description}</p>
        </div>
    )
}

export default RecipeDetails