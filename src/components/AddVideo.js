import { useEffect, useState } from 'react';
import './AddVideo.css';

function AddVideo({addVideo, editableVideo, updateVideo}){

    const initialState = {
        image : '',
        title : '',
        channel : "Toturial Adda",
        views : '',
        time : '',
        verified : '---Select Verified---'
    };

    const [video, setVideo] = useState(initialState)

    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo){
            updateVideo(video)
        }else{
            addVideo(video);
        }
        setVideo(initialState)
    }

    function handleChange(e){
       setVideo({...video,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        if(editableVideo){
            setVideo(editableVideo)
        }
    }, [editableVideo])

    return(
        <form>
            <input type='text' name='image' value={video.image} placeholder='image' onChange={handleChange}></input>
            <input type="text" name='title' value={video.title} placeholder="title" onChange={handleChange}></input>
            <input type="text" name='views' value={video.views} placeholder="views" onChange={handleChange}></input>
            <select name='verified' value={video.verified} onChange={handleChange} >
                <option value="">---Select Verified---</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <input name='time' value={video.time} type='text' placeholder='time' onChange={handleChange}></input>
            <button className='submitBtn' onClick={handleSubmit}>Submit</button>
        </form>

    )
}

export default AddVideo;