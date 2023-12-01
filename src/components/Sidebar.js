const Sidebar = () => {
  return (
    <div className="w-[13%] h-screen p-4">
      <div className="my-2 py-2 border-b-[1px]">
        <ul className="space-y-2">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="my-2 py-2 border-b-[1px]">
        <h1 className="font-semibold">{"You >"}</h1>
        <ul className="space-y-2">
          <li>History</li>
          <li>Watch later</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <div className="my-2 py-2 border-b-[1px] space-y-2">
        <h1 className="font-semibold">Explore</h1>
        <ul className="space-y-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
