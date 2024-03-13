
import React, { useEffect, useState } from 'react';

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let formattedTime = '';
    if (hours > 0) {
        formattedTime += hours + ' hour' + (hours === 1 ? '' : 's') + ' ';
    }
    if (minutes > 0) {
        formattedTime += minutes + ' minute' + (minutes === 1 ? '' : 's') + ' ';
    }
    if (hours === 0 && minutes === 0) {
        formattedTime += remainingSeconds + ' second' + (remainingSeconds === 1 ? '' : 's');
    }

    return formattedTime.trim();
}

export default function TimedEvent(props) {
    const [timeUntil, setTimeUntil] = useState("");
    const [inProgress, setInProgress] = useState(false);

    useEffect(() => {
        const calcTime = () => {
            let calcStart = props.startTime || 1707260400; // unix
            let inProgressEvent = props.inProgressEvent || false;
            let time = new Date().getTime();
            let utc = parseInt((time / 1000).toFixed(0))
            let secondsSinceFirstReset = utc - calcStart;
            let timestamp = calcStart + ((Math.floor(secondsSinceFirstReset / 10800)+ 1) * 10800);
            let timeLeft = timestamp - utc;


            console.log(inProgressEvent, timeLeft > inProgressEvent)
            if (inProgressEvent && timeLeft > inProgressEvent)
            {
                setInProgress(true);
            }

            setTimeUntil(formatTime(timeLeft));
        }

        calcTime();
        const intervalId = setInterval(calcTime, 30000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div>
                <h4 className='font-bold'>{props.name}</h4>
                {inProgress && 
                    <p>In progress!</p>
                }
                {!inProgress &&
                    <p>{timeUntil}</p>
                }
            </div>
        </>
    )
}