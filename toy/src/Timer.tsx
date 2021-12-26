import React, { useState, useEffect } from 'react';
import { ITime } from './Title';
interface IProps {
    time: ITime;
    GameEnding: boolean;
}

const Timer = (props: IProps) => {
    const [minutes, setMinutes] = useState(props.time.minute);
    const [seconds, setSeconds] = useState(props.time.second);
    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);
    return (
        <>
            {props.GameEnding
                ? '0:0'
                : `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
        </>
    );
};

export default Timer;
