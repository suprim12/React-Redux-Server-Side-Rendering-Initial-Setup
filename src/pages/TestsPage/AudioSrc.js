import React, { useEffect, useRef } from 'react'

const AudioSrc = ({ src, play = false }) => {
    const audioref = useRef(null);
    const audioRangeref = useRef(null);
    const audioProgressref = useRef(null);
    const audioProgressCurrentRef = useRef(null);
    const audioProgressDurationtRef = useRef(null);
    useEffect(() => {

        const audisrc = audioref.current;
        const audioplayer = document.querySelector('.audio-play');
        const audiornange = audioRangeref.current;
        let progress = audioProgressref.current;
        let mousedown = false;
        let currenttime;
        let duration;

        audioplayer.addEventListener('click', toggleAudio);
        audisrc.addEventListener('play', updateicon);
        audisrc.addEventListener('pause', updateicon);
        audisrc.addEventListener('stop', updateicon);
        audisrc.addEventListener('timeupdate', handletimeupdate);
        // DEFAULT RANGE VALUE
        progress.value = 0;
        audiornange.value = 0.5;
        progress.addEventListener('click', handlesrub);
        progress.addEventListener('mousemove', (e) => {
            if (mousedown) {
                handlesrub(e);
            }
        });
        progress.addEventListener('mousedown', () => mousedown = true);
        progress.addEventListener('mouseup', () => mousedown = false);
        audiornange.addEventListener('change', handlerangeAudio);
        audiornange.addEventListener('mousemove', handlerangeAudio);
        if (play) {
            toggleAudio();
        }

        // TOGGLE AUDIO
        function updateicon() {
            audioplayer.classList.toggle('active');
        }
        function toggleAudio() {
            if (audisrc.paused) {
                audisrc.play();
                console.log('audio played');
            } else {
                audisrc.pause();
                console.log('audio paused');
            }
        }

        function handlerangeAudio() {
            audisrc[this.name] = this.value;
        }
        function handlesrub(e) {
            const scrubtime = (e.offsetX / progress.offsetWidth) * audisrc.duration;
            audisrc.currentTime = scrubtime;
        }
        function millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

        function handletimeupdate() {
            currenttime = audisrc.currentTime;
            duration = audisrc.duration;
            audioProgressCurrentRef.current.textContent = millisToMinutesAndSeconds(currenttime * 1000);
            audioProgressDurationtRef.current.textContent = millisToMinutesAndSeconds(duration * 1000);
            const precent = (audisrc.currentTime / audisrc.duration) * 100;
            progress.value = precent;
        }

        // CLEAR
        return () => {
            audioplayer.removeEventListener('click', toggleAudio);
            audisrc.removeEventListener('play', updateicon);
            audisrc.removeEventListener('pause', updateicon);
            audisrc.removeEventListener('stop', updateicon);
            audisrc.removeEventListener('timeupdate', handletimeupdate);
            progress.removeEventListener('click', handlesrub);
            progress.removeEventListener('mousemove', (e) => {
                if (mousedown) {
                    handlesrub(e);
                }
            });
            progress.removeEventListener('mousedown', () => mousedown = true);
            progress.removeEventListener('mouseup', () => mousedown = false);
            audiornange.removeEventListener('change', handlerangeAudio);
            audiornange.removeEventListener('mousemove', handlerangeAudio);
        }
    }, [play]);


    return (
        <section className="audio-section">
            <audio id="audio" ref={audioref}>
                <source src={src} />
            </audio>
            <header className="audio-section--header">
                <div className="audio-play" >
                    <div className="play-icon">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div className="pause-icon">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="audio-timeline">
                    <div className="audio-time-current" ref={audioProgressCurrentRef}>0:00</div>
                    <div className="audio-time-range">
                        <input
                            type="range"
                            ref={audioProgressref}
                            className="audio-time-range--input"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div className="audio-time-duration" ref={audioProgressDurationtRef}>30:00</div>
                </div>
            </header>
            <main className="audio-section--controlls">
                <div className="audio-section--controlls-item">
                    <div className="audio-playback"></div>
                    <div className="audio-playforward"></div>
                </div>
                <div className="audio-section--controlls-item">
                    <div className="audio-volume">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        ref={audioRangeref}
                        name="volume"
                        step="0.05"
                        className="questions-range"
                    />
                </div>
            </main>
        </section>
    )
}

export default AudioSrc
