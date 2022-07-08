import React, { useState } from 'react';
let count = 0;
function Temp(){
    const [cCount , setcount] = useState(count);
    const updateCount = () =>{
        setcount(count++);
    }
    return (<div>
    <h1>Sorting Visuilizer</h1>
        <button onClick = {updateCount}>{cCount}</button>
    </div>);
}
export default Temp;