import './Video.css'
import check from './images/check.png'
import check1 from './images/check (1).png'


function Video({id, image, channel, title, views, time, verified, children, deleteVideo, editVideo}){ // arguments we have pass in this function called 'props'

    /** This is long process for Conditional Rendering **/
    // let channelJsx;
    // if(verified){
    //     channelJsx = <div className="channel">{channel} <img src={check} width='10px' height='10px'></img></div>
    // }else {
    //     channelJsx = <div className="channel">{channel} <img src={check1} width='10px' height='10px'></img></div>
    // }

    function handleClickClose(e) {
        e.stopPropagation();
        deleteVideo(id);
    }
    
    function handleClickEdit(e) {
        e.stopPropagation();
        editVideo(id)
    }

    return(
        // This HTML like code is known as JSX
        <>
        <div className="container">
            <button className='closeBtn' onClick={handleClickClose}>X</button>
            <button className='editBtn' onClick={handleClickEdit}>Edit</button>
            <div className="pic">
                <img src={image} width={200} height={130} alt="Random" />
            </div>
            <div className="title">{title} Toturial</div>
{/* Conditional Rendering */}
            {/* By using varible */}
            {/* {channelJsx} */}
            {/* By using Ternary Operator */}
            {/* <div className="channel">{channel} 
                {verified ? <img src={check} width='10px' height='10px'></img> : <img src={check1} width='10px' height='10px'></img>}
            </div> */}
            {/* Only if the condition is true then image was visible*/}
            <div className="channel">{channel} {verified && <img src={check} alt='Verified Tick' width='10px' height='10px'></img>}</div>
            <div className="views">
                {views} views <span>.</span> {time} ago
            </div>
            <div>
                {children}
            </div>
        </div>
        </>
    );
}

// function Thumbnail(){

//     return(
//         <div>Thumbnail</div>
//     )
// }

// Create one function and import as given below. Recommended Way to use
export default Video;

// Other way
// export {Video, Thumbnail}