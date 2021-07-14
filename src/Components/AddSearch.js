import React from 'react'
import { useForm } from '../hooks/useForm'

export const AddSearch = ( {setnombres} ) => {

    const [values, handleInputChange] = useForm({
        busqueda: ''
    });

    const {busqueda} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        setnombres(state => [busqueda, ...state ] )
    }
    
    return (
        <div>
            <form onSubmit = {handleSubmit} className = "mb-3">
                <input type="text" 
                    name = "busqueda"
                    value = {busqueda}
                    onChange = {handleInputChange}
                    autoComplete = "off"
                    className = "form-control col-5"/>
            </form>
        </div>
    )
}
