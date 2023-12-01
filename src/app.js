import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import VideoPlayer from "./components/VideoPlayer";
import { YOUTUBE_API_ENDPOINT } from "./utils/constants.js";
import VideoContext from "./utils/videoContext.js";

const App = () => {
  const InitialState = useContext(VideoContext);
  const [data, setData] = useState(InitialState);
  const fetchData = async () => {
    const response = await fetch(YOUTUBE_API_ENDPOINT);
    const data = await response.json();
    setData(data);
    console.log(data.items);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <VideoContext.Provider value={data}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </VideoContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/watch/:id",
        element: <VideoPlayer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
