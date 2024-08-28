import './App.css';
import PlayButton from './components/PlayButton';
import DigitalClock from './components/DigitalClock';
// Recommended import way
import Video from './components/Video'
import AddVideo from './components/AddVideo';
import { useState } from 'react';
import VideoList from './components/VideoList';
// Import for multiple functions
// import { Video, Thumbnail } from './components/Video';

function App() {

  // We can initialize the varibles of class names and use it in {} braces.
    let appClass = 'App';
    let appHeaderClass = 'App-header'
    let channel = "Toturial Adda"
    let image1 = "https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?w=1060&t=st=1701863591~exp=1701864191~hmac=8232484ef0d8f3364bbcbb5a5befa8f56582958bfcb7694da46062f5fa80b0c1";
    let image2 = "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1060&t=st=1701866198~exp=1701866798~hmac=c61dc403a079ea363ffb4deddb2555651b3e84cc8c451816855030d24e37ad19";
    let image3 = "https://img.freepik.com/free-psd/digital-marketing-agency-corporate-web-banner-template_120329-2077.jpg?w=826&t=st=1701866250~exp=1701866850~hmac=3c40d862c9e4a18a845b09878fb1b5aca8cf000524210ac2a6881d2da725b63f";
  
    // Also we can create an object and pass as props in functions
    let obj1 = {
      id: 1,
      image: image1,
      title: "Workout",
      channel: channel,
      views: "56K",
      time: "8 months",
      verified: true
    }
  
    // Passing array of objects for iterating same function
    const videos = [{
      id: 1,
      image: image1,
      title: "Workout",
      channel: channel,
      views: "56K",
      time: "8 months",
      verified: true
    },
    {
      id: 2,
      image: image2,
      title: "Business Tips",
      channel: channel,
      views: "34K",
      time: "3 weeks",
      verified: false
    },
    {
      id: 3,
      image: image3,
      title: "Digital Markiting",
      channel: channel,
      views: "1M",
      time: "1 year",
      verified: true
    }]

  const [allVideo, setAllVideo] = useState([...videos]);
  const [editableVideo, setEditableVideo] = useState(null)

  function addVideo(video){
    setAllVideo([...allVideo, {...video, id : allVideo.length+1}])
  }

  function deleteVideo(id){
    setAllVideo(allVideo.filter(e => e.id !== id))
  }

  function editVideo(id){  
    console.log(allVideo.find(e => e.id === id))
    setEditableVideo(allVideo.find(e => e.id === id))
  }

  function updateVideo(video){
    console.log("updateVideo",video)
    const index = allVideo.findIndex(e => e.id === video.id)
    allVideo.splice(index, 1, video);
    setAllVideo([...allVideo])
  }

  return (
    <div className='App' onClick={()=>console.log('App')}>
      <div className='videos'>Videos</div>
      {/* <Video {...obj1}></Video>
      <Video id={2} image={image2} title="Business Tips" channel={channel} views="34K" time="3 weeks" verified={false}></Video> */}
      <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList allVideo={allVideo} deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>

      {/* <div style={{ clear: 'both' }}>
         This onPlay and onPause is custom event's
            By using this we can run two functions one after another on one Button 
        <PlayButton onPlay={() => console.log('Play-btn')} onPause={() => console.log('Pause-btn')}>Play</PlayButton>
       <PlayButton onSmash={()=>console.log('Pause-btn')}>Pause</PlayButton>
      </div>*/}
      {/* <DigitalClock></DigitalClock> */}
    </div>
  );
}

export default App;
