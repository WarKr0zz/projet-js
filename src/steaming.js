import React, { useState } from "react";
import YouTube from "react-youtube";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=AIzaSyAGbSCiMaTyBD1rNgBnosNSWRLQZ_ubzvI`
    );
    const data = await response.json();
    setVideos(data.items);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const renderVideoList = () => {
    return (
      <ul className="video-list">
        {videos.map((video) => (
          <li key={video.id.videoId} className="video-list-item">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              onClick={() => handleVideoSelect(video)}
              className="video-thumbnail"
            />
            <p className="video-title">{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (

    <div className="app-container">
      {/* ci dessous le logo du site, il sera amélioré plus tard */}
        louis le gros moche 
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search for videos"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="video-container">
        {selectedVideo ? (
          <YouTube videoId={selectedVideo.id.videoId} className="video-player" />
        ) : (
          renderVideoList()
        )}
      </div>
    </div>
  );
}

export default App;