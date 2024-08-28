import { useState } from 'react';
import './PlayButton.css';


function PlayButton({onPlay, onPause, children}){
    // let playing = false; // variables like this are not update in its state.
    // So that's why we have to use a hook called 'usestate'.
    const [playing, setPlaying] = useState(false);

    function handleOnClickPlayButton(eventObject){
        eventObject.stopPropagation(); // This is for stop event bubbling
        
        if(playing) onPause()
        else onPlay();
        
        // playing = !playing;
        setPlaying(!playing);
    }

    return (
        <button className='playBtn' onClick={handleOnClickPlayButton}>{children} {playing ? '||' : '>'}</button>
    );
}

export default PlayButton;