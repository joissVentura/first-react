import React, { useState } from 'react'
import { useFetchSearch } from '../hooks/useFetchSearch'
import { ItemSearch } from './ItemSearch';

export const ListSearch = ({name}) => {

    const {data, loading} = useFetchSearch(name);

    return (
        <div>
            
            {loading && <p>Loading ...</p>}
            {!loading && <h2>{name}</h2>}
            
            <div className="card-grid">
                {data.map( (item) => {
                    return(
                        <ItemSearch key = {item.id} data = {item}/>
                    )
                })}
            </div>
        </div>
    )
}
