import React, { useState } from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = ({
    data = [],
    onSelect = () => null,
    selectedRecipe = {}
}) => {
    const [keyword, setKeyword] = useState('')

    const filterData = (e) => {
        if (!keyword) {
            return true
        }
        const { author = '', name = '' } = e ?? {}
        const lowerKeyword = keyword.toLocaleLowerCase()
        const lowerAuthor = author.toLocaleLowerCase()
        const lowerName = name.toLocaleLowerCase()
        return lowerAuthor.indexOf(lowerKeyword) > -1 || lowerName.indexOf(lowerKeyword) > -1
    }
    const filteredData = data.filter(filterData)

    const hasSelected = Object.values(selectedRecipe ?? {}).length > 0
    return (
        <div className={`recipe-list${hasSelected ? ' has-selected' : ''}`}>
            <div className="search">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e?.target?.value ?? '')}
                    placeholder="Search"
                />
            </div>
            {data.length > 0 ?
                filteredData.length > 0 ?
                    <ul className="recipes">
                        {filteredData.map((i, key) => {

                            return (
                                <RecipeItem
                                    key={key}
                                    data={i}
                                    onSelect={onSelect}
                                    selectedRecipe={selectedRecipe} />
                            )
                        })}
                    </ul>
                    :
                    <p>{`No '${keyword}' Found.`}</p>
                :
                <p className="empty-data">No recipe available.</p>
            }
        </div>
    )
}

export default RecipeList