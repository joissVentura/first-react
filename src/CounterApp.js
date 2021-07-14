import React, { useState } from 'react'
import { ComponenteHijo } from './Components/ComponenteHijo';

import PropTypes from 'prop-types';


export const CounterApp = ({valor}) => {
    const [counterState, setcounterState] = useState(valor);

    const aumentar = () => {
        setcounterState( counterState + 1);
    }

    const reducir = () => {
        setcounterState( counterState - 1);
    }

    const reset = () => {
        setcounterState( valor );
    }

    return (
        <div className = "d-flex-column">
            <h2 className = "mb-3">Counter App ** {counterState}</h2>
            <hr />
            <button onClick = { () => {aumentar()}} 
                className = "btn btn-outline-primary mr-3"> +1 </button>

            <button onClick = { () => {reset()}} 
                className = "btn btn-outline-primary mr-3"> Reset </button>

            <button onClick = { () => {reducir()}} 
                className = "btn btn-outline-primary"> -1 </button>
        </div>
    )
}
CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}