import { useEffect, useState } from 'react'
import { getData } from '../helpers/getData';

export const useFetchSearch = (name) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=> {
        getData(name)
                .then(results => {
                    setstate({
                        data: results,
                        loading: false
                    })
            }
        )
    },[name])
        
    return state;
}
