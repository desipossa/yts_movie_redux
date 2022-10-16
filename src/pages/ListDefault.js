import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovie } from '../store';


const ListDefault = ({ limit, genre, pagenum }) => {
    const { listMovie } = useSelector(state => state);
    //const path = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie({ limit: limit, pagenum: pagenum, genre: genre }))
    }, [genre])

    return (
        <div className='ListDefault'>
            <Outlet />

            {!listMovie.movies ? <>LOADING</>
                :
                <>
                    {
                        listMovie.movies.map(movie => {

                            return (
                                <Link to={`/main/${genre}/detail/${movie.id}`}>
                                    <div key={movie.id}>
                                        <img src={movie.medium_cover_image} alt={movie.title_long} />
                                        {movie.title_long}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </>

            }
        </div>
    )
}

export default ListDefault