import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setToggle } from '../store';




const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { listMovie, toggle } = useSelector(state => state);
    const matchMovie = listMovie.movies?.find(it => String(it.id) === id);
    useEffect(() => {
        dispatch(setToggle(false))
    }, [id])
    return (
        <div className={`Detail ${toggle ? "on" : ""}`} onClick={
            () => dispatch(setToggle(true))
        }>

            {
                matchMovie ? <>
                    <div key={matchMovie.id}>
                        <img src={matchMovie.large_cover_image} alt={matchMovie.title_long} />
                        {matchMovie.title_long}
                    </div>
                </> : <>Lo</>
            }

        </div>
    )
}

export default Detail