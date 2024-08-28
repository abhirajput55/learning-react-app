import PlayButton from "./PlayButton";
import Video from "./Video";
import "./Video.css"


function VideoList({allVideo, deleteVideo, editVideo}) {

    return (
        <>
        {
        allVideo.map(video =>
          <Video
            key={video.id}
            id={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          >
          <PlayButton onPlay={() => console.log('Play-btn')} onPause={() => console.log('Pause-btn')}>Play {video.id}</PlayButton>
          </Video>
        )
      }
        </>
    );
}

export default VideoList;