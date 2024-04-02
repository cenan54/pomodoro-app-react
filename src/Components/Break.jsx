import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import moment from "moment";

const Break = () => {
    const [breakLength, setBreakLength] = useState(300)
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 0) {
            setBreakLength(0);
        } 
        else{
            setBreakLength(newBreakLength);
        }
    }

    const incrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength + 60;

        setBreakLength(newBreakLength);
        
        
    }

    const breakLengthInMinutes = moment.duration(breakLength,"s").minutes()
    return (
        <div>
            <p class="display-4" id="break-label">Break</p>
            <p class="display-5" id="break-length">{breakLengthInMinutes}</p>
            <button class="btn btn-outline-success mx-3" id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
            <button class="btn btn-outline-success mx-3" id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>
    )
}

export default Break;