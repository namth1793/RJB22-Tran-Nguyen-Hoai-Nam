import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function LikeButton() {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    
    setIsActive(current => !current);
  };
  return (
    <div style={{margin:"50px"}}>
      <button style={{backgroundColor: isActive ? 'salmon' : '',color: isActive ? 'white' : '',}} onClick={handleClick} >
        <FavoriteBorderIcon/>Like
      </button>
    </div>
  )
}

