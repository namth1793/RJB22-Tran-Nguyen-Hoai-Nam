import React from 'react';
import MostPopular from './MostPopular';
import NowPlaying from './NowPlaying';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Final() {
    return (
        <div className='block row'>
            <div className='block_left col-7'>
            <MostPopular />
            </div>
            <div className='block_right col-5'>
            <NowPlaying/>
            </div>
        </div>
    )
}
