import React from 'react'

const RecipeItem = ({
    data = {},
    onSelect = () => null,
    selectedRecipe = {}
}) => {
    const { author: selectedAuthor = '', name: selectedName = '' } = selectedRecipe ?? {}
    const { author = '', name = '', img } = data ?? {}


    const isSelected = selectedAuthor === author && selectedName === name
    return (
        <li
            className={`recipe-item${isSelected ? ' active' : ''}`}
            onClick={() => onSelect(data)}
        >
            <img src={img} alt={name} />
            <div className="details">
                <h2>{name}</h2>
                <h4>{author}</h4>
            </div>
        </li>
    )
}

export default RecipeItem