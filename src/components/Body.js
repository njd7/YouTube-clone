import Hero from "./Hero";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Body;
