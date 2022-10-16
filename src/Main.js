import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom'
import { getMovie } from './store';


const Main = () => {
    return (
        <div>

            <Outlet />

        </div>
    )
}

export default Main