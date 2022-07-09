import React, { useState,useEffect } from "react";

function IncreaseNumber() {
    const [number, updateNumber] = useState(0);
    useEffect(() => {
        updateNumber(number + 1);
    },[]);
    return (
        <div>
            <p>{number}</p>
            <button type="button" onClick={() => updateNumber(number+1)}>Increment</button>
            <button type="button" onClick={() => updateNumber(0)}>Off</button>
        </div>
    )
}
export default IncreaseNumber;