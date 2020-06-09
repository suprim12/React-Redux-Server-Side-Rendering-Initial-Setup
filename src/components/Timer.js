import React, { useRef, useEffect } from 'react'

const Timer = ({ timer, text, start = false }) => {
    const timerRef = useRef(null);
    useEffect(() => {
        let timeout;
        if (start) {
            let time = (parseInt(timer) * 60) || 40 * 60;
            timeout = setInterval(function () {
                if (time <= 0) {
                    clearInterval(timeout);
                }
                let minutes = Math.floor(time / 60);
                let seconds = time % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                if (timerRef !== null || timerRef !== undefined || timerRef.current !== null) {
                    timerRef.current.textContent = `${minutes} : ${seconds}`;
                }
                time--;
            }, 1000);
        }
        return () => {
            clearInterval(timeout);
        }
    }, [timer, start, timerRef]);
    return (
        <span className="time" ref={timerRef}>{text}</span>
    )
}

export default Timer
