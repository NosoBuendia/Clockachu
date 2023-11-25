import React, { useState, useEffect } from 'react';

export default function Clock({ setCurrentTime }) {
    const [ctime, setTime] = useState(getFormattedTime());

    function getFormattedTime() {
        const date = new Date();
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = getFormattedTime();
            setTime(currentTime);
            setCurrentTime && setCurrentTime(currentTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [setCurrentTime]);

    return <>{ctime}</>;
}