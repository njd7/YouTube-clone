const Card = ({ data }) => {
  const { snippet, statistics } = data;
  return (
    <div className="p-2 m-2 w-72 cursor-pointer">
      <img
        className="rounded-lg hover:rounded-none delay-300 transform-gpu"
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />

      <div className="mt-2 flex justify-between">
        {/* <img className="rounded-full w-10 h-10 bg-gray-300" alt="channelIcon" src={logo} /> */}

        <ul>
          <li className="m-1 text-sm font-semibold">{snippet.localized.title}</li>
          <li className="m-1 text-xs">{snippet.channelTitle}</li>
          <li className="m-1 text-xs">{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
