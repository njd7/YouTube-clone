import { useContext } from "react";
import VideoContext from "../utils/videoContext";
import Card from "./Card";
import Categories from "./Categories";
import ShimmerCardUI from "./ShimmerCardUI";
import { Link } from "react-router-dom";

const Hero = () => {
  const { items } = useContext(VideoContext);
  return (
    <div className="w-[87%] bg-gray-100 justify-center pl-[50px] ">
      <Categories />
      <div className="container flex flex-wrap">
        {items &&
          items.map((item) => (
            <Link key={item.id} to={"/watch/" + item.id}>
              <Card data={item} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Hero;
