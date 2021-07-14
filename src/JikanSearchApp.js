import React, { useState } from 'react'
import { AddSearch } from './Components/AddSearch'
import { ListSearch } from './Components/ListSearch';

export const JikanSearchApp = ({nombresDefault = []}) => {
    
    const [nombres, setnombres] = useState(nombresDefault);

    return (
        <div>
            <h1 className = "mt-4">BUSCA ANIMES</h1>
            <hr />
            <AddSearch setnombres = {setnombres}/>

            {nombres.map( (nombre) => {
                return(
                    <ListSearch key = {nombre} name = {nombre}/>
                )
            })}
        </div>
    )
}
