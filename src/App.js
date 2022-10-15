import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from './store';

//https://api.coinpaprika.com/v1/tickers 이건 비트코인...



const App = () => {
    const { listMovie } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie())
    }, [dispatch])

    return (
        <div>
            {
                listMovie.map(movie => {
                    return (
                        <div>{movie.id}</div>
                    )
                })
            }

        </div>
    )
}

export default App