import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [state, setstate] = useState(initialState);

    const handdleInputChange = ({target}) => {
        setstate({
            ...state,
            [target.name]:target.value
        })
    }
    const handleReset = () =>{
        setstate(initialState);
    }
    return [state,handdleInputChange, handleReset];
}
