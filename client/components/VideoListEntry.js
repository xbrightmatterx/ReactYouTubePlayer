var VideoListEntry = ({video, handleClick}) => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => handleClick(video)}>{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.title}</div>
      </div>
    </div>
  );
}

window.VideoListEntry = VideoListEntry;
