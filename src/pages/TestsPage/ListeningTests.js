import React, { useState, useRef } from 'react'
import MainLayout from '../../components/hoc/MainLayout'
import AudioSrc from './AudioSrc';
import Timer from '../../components/Timer';
const ListeningTests = () => {
    const [starttest, setStartTest] = useState(false);
    const startoverlayRef = useRef(null);
    const handlestarttest = (e) => {
        setStartTest(true);
        e.target.remove();
        startoverlayRef.current.remove();
        return () => {
            setStartTest(false);
        }
    }
    return (
        <MainLayout>
            <div className="wrapper">
                <div className="row">
                    <div className="wrap-md-9">
                        <AudioSrc src="/test1.mp3" play={starttest}></AudioSrc>
                    </div>
                    <div className="wrap-md-3">
                        <div className="actions">
                            <div className="actions-wrapper">
                                <div className="actions-timer">
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <Timer timer="40" text="40 : 00" start={starttest} ></Timer>
                                </div>
                                <div className="actions-btns">
                                    <div className="actions-btns--item">
                                        <div className="actions-overlay" ref={startoverlayRef}></div>
                                        <button className="start-btn" type="button" id="startbutton" onClick={handlestarttest}>
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
											Start Test
										</button>
                                    </div>
                                    <div className="actions-btns--item">
                                        <button type="submit" id="submitBtn">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
											Submit
										</button>
                                    </div>
                                    <div className="actions-btns--item">
                                        <button type="button">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
											Solution
										</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ListeningTests
