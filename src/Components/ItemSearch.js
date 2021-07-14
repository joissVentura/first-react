import React from 'react'

export const ItemSearch = ({data}) => {
    const {id, title, image, episodes, score, start_date} = data;
    return (
        <div className = "card">
            <p>{title}</p>
            <p>{start_date}</p>
            <img src={image} alt={title} />
        </div>
    )
}
