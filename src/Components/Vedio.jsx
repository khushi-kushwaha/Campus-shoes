import { useState } from 'react';

function Video() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex justify-center items-center h-[600px] w-full  relative bg-gray-800">
      {/* Thumbnail Image with Play Button */}
      {!isVideoPlaying && (
        <div
          onClick={playVideo}
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
        >
          <img
            src="https://www.campusshoes.com/cdn/shop/files/Video_Thumbnail_image_179f4699-9340-4467-a7d4-197b0dbf66ee_900x.jpg?v=1728885757"
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex justify-center items-center">
            <svg
              className="w-16 h-16 text-white opacity-75"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
      )}

      {/* YouTube Iframe */}
      {isVideoPlaying && (
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/yb8QpfgMTTY?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default Video;
