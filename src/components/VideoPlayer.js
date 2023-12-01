import React from "react";
import { useParams } from "react-router";

const VideoPlayer = () => {
  const { id } = useParams();
  return (
    <div>
      <iframe
        className="h-[576px] w-[920px] mt-2 pt-2 p-8 m-10"
        src={"https://www.youtube.com/embed/" + id + "?si=JPcyXVzun9zqGL_e"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
