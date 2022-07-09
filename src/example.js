import React, { useState } from 'react';

function FavoriteColor() {
    const [color, setColor] = useState("");
    return (
        <>
        <h1 style={{color}}>My favorite color is {color}!</h1>
        <button type="button" onClick={() =>  setColor("blue") }>blue</button>
        </>
    )
}
export default FavoriteColor;