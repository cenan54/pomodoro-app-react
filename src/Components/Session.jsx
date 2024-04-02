import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import moment from "moment";

const Session = () => {
    const [SessionLength, setSessionLength] = useState(60 * 25)
    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = SessionLength - 60;

        if (newSessionLength < 0) {
            setSessionLength(0);
        } 
        else{
            setSessionLength(newSessionLength);
        }
    }

    const incrementSessionLengthByOneMinute = () => {
        const newSessionLength = SessionLength + 60;

        setSessionLength(newSessionLength);
        
        
    }

    const SessionLengthInMinutes = moment.duration(SessionLength,"s").minutes()
    return (
        <div>
            <p class="display-4" id="Session-label">Session</p>
            <p class="display-5" id="Session-length">{SessionLengthInMinutes}</p>
            <button class="btn btn-outline-success mx-3" id="Session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
            <button class="btn btn-outline-success mx-3" id="Session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
        </div>
    )
}

export default Session;