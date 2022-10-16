import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from './store';

//https://api.coinpaprika.com/v1/tickers 이건 비트코인...



const App = () => {
    const { listMovie } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie({ limit: 50, pagenum: 3 }))
    }, [dispatch])

    return (
        <div>

            {!listMovie.movies ? <>LOADING</>
                :
                <>
                    {
                        listMovie.movies.map(movie => {
                            return (
                                <div key={movie.id}>{movie.id}</div>
                            )
                        })
                    }
                </>

            }
        </div>
    )
}

export default App