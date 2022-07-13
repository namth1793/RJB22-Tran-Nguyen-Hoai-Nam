import React from 'react';
import './NowPlaying.css';
import img from './music cd.png';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { BsFillPauseFill } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';

export default function NowPlaying() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='block_playing'>
            <h3 style={{ fontWeight: 700 }}>Now Playing</h3>
            <p>55 items on the list</p>
            <div className='block_music'>
                <img className='img_cd' src={img} alt="music CD" />
                <strong style={{display:"block"}}>I Love U So Much</strong>
                <p style={{ display: "block" }}>Hacker black</p>
                <Box className='block_volume' sx={{ width: 300 }}>
                    <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
            </Stack>
        </Box>
            </div>
            <div className='menu'>
            <RepeatIcon style={{ fontSize: "30px" },{marginRight:"60px"}}/>
                <BiSkipPrevious style={{ fontSize: "50px" }} />
                <BsFillPauseFill style={{fontSize:"50px"}}/>
                <BiSkipNext style={{ fontSize: "50px" }} />
                <ShuffleIcon style={{fontSize:"30px"},{marginLeft:"60px"}}/>
            </div>
        </div>
    )
}
