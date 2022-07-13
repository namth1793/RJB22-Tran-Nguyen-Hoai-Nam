import React from 'react';
import img from './MusicPlayer (1).png';
import { FaPlay, FaHeart } from 'react-icons/fa';
import './MostPopular.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MostPopular() {
    return (
        <div className='block'>
            <div className='container-fluid'>
            <h3 style={{fontWeight:700}}>Most Popular</h3>
            <p>92 songs</p>
            <div className='block1 row'>
                <div className='block1_first col-5'>
                    <div className='song_number'>
                        <strong>01</strong>
                    </div>
                    <div className='img'>
                    <img src={img} alt="img" />
                    </div>
                    <div className='song_number'>
                    <FaPlay style={{margin:"0 20px"}}/>
                    <strong>My Stress</strong>
                    </div>
                </div>
                <div className='block1_second col-3'>
                    <p style={{fontFamily:"Edu SA Beginner"}}>NF Real Music</p>
                </div>
                <div className='block1_third col-3'>
                    <p>3:22</p>
                </div>
                <div className='block1_fourth col-1'>
                    <FaHeart style={{color:"red"}}/>
                </div>
            </div>
            <div className='block1 row'>
                <div className='block1_first col-5'>
                    <div className='song_number'>
                        <strong>02</strong>
                    </div>
                    <div className='img'>
                    <img src={img} alt="img" />
                    </div>
                    <div className='song_number'>
                    <FaPlay style={{margin:"0 20px"}}/>
                    <strong>Migrage</strong>
                    </div>
                </div>
                <div className='block1_second col-3'>
                    <p style={{fontFamily:"Edu SA Beginner"}}>Else Twin</p>
                </div>
                <div className='block1_third col-3'>
                    <p>4:23</p>
                </div>
                <div className='block1_fourth col-1'>
                    <FaHeart/>
                </div>
            </div>
            <div className='block1 row'>
                <div className='block1_first col-5'>
                    <div className='song_number'>
                        <strong>03</strong>
                    </div>
                    <div className='img'>
                    <img src={img} alt="img" />
                    </div>
                    <div className='song_number'>
                    <FaPlay style={{margin:"0 20px"}}/>
                    <strong>My Stress</strong>
                    </div>
                </div>
                <div className='block1_second col-3'>
                    <p style={{fontFamily:"Edu SA Beginner"}}>NF Real Music</p>
                </div>
                <div className='block1_third col-3'>
                    <p>3:58</p>
                </div>
                <div className='block1_fourth col-1'>
                    <FaHeart  style={{color:"red"}}/>
                </div>
            </div>
            <div className='block1 row'>
                <div className='block1_first col-5'>
                    <div className='song_number'>
                        <strong>04</strong>
                    </div>
                    <div className='img'>
                    <img src={img} alt="img" />
                    </div>
                    <div className='song_number'>
                    <FaPlay style={{margin:"0 20px"}}/>
                    <strong>The Hills</strong>
                    </div>
                </div>
                <div className='block1_second col-3'>
                    <p style={{fontFamily:"Edu SA Beginner"}}>The Weekends</p>
                </div>
                <div className='block1_third col-3'>
                    <p>5:33</p>
                </div>
                <div className='block1_fourth col-1'>
                    <FaHeart/>
                </div>
            </div>
            <div className='block1 row'>
                <div className='block1_first col-5'>
                    <div className='song_number'>
                        <strong>05</strong>
                    </div>
                    <div className='img'>
                    <img src={img} alt="img" />
                    </div>
                    <div className='song_number'>
                    <FaPlay style={{margin:"0 20px"}}/>
                    <strong>Paralyzed</strong>
                    </div>
                </div>
                <div className='block1_second col-3'>
                    <p style={{fontFamily:"Edu SA Beginner"}}>NF Real Music</p>
                </div>
                <div className='block1_third col-3'>
                    <p>5:08</p>
                </div>
                <div className='block1_fourth col-1'>
                    <FaHeart  style={{color:"red"}}/>
                </div>
            </div>
            <div className='block1 row'>
                <div className='block1_first col-5'>
                    <div className='song_number'>
                        <strong>06</strong>
                    </div>
                    <div className='img'>
                    <img src={img} alt="img" />
                    </div>
                    <div className='song_number'>
                    <FaPlay style={{margin:"0 20px"}}/>
                    <strong>Timeless</strong>
                    </div>
                </div>
                <div className='block1_second col-3'>
                    <p style={{fontFamily:"Edu SA Beginner"}}>Lucidious</p>
                </div>
                <div className='block1_third col-3'>
                    <p>3:50</p>
                </div>
                <div className='block1_fourth col-1'>
                    <FaHeart/>
                </div>
            </div>
        </div>
        </div>
    )
}
