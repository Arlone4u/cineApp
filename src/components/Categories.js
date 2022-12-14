import React from 'react'

const Categories = ({selectedCategories, setCategories}) =>  {

    const Categories = ['STARTERS', 'LUNCH', 'DRINKS'];

    return (
        <div className="Categories">
            <div className="size-list">
                {
                    Categories.map((size, index) => {
                        return (
                            <button
                                data-testid="navbtns"
                                className={ "size" + (selectedCategories.includes(size) ? " selected-size" : "")}
                                key={index}
                                onClick={() => setCategories(size)}
                            >
                                {size}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories;