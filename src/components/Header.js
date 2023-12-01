import { Link } from "react-router-dom";
import { LOGO, MENU, NOT_ICON, SEARCH, USER_ICON } from "../utils/constants";

const Header = () => {
  return (
    <div className="px-6 flex h-[70px] items-center justify-between">
      <div className="flex justify-between items-center">
        <div className="rounded-full hover:bg-slate-200 h-[32px] w-[32px] pl-[5px] pt-[5px]">
          <img alt="logo" src={MENU} className="h-[20px] w-[20px] mr-3 cursor-pointer" />
        </div>
        <Link to="/">
          <img alt="logo" src={LOGO} className="h-[60px] w-[110px] ml-3 object-cover cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center">
        <input
          className="w-[500px] h-[45px] border border-gray-300 py-2 px-4 text-lg rounded-l-[20px]"
          placeholder="Search"
        />
        <div className="w-[50px] h-[45px] border border-l-0 border-gray-300 p-2 rounded-r-[20px]">
          <img alt="search-icon" src={SEARCH} className="w-[25px]" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img alt="user-icon" src={NOT_ICON} className="m-2 w-6 h-6  " />
        <img alt="user-icon" src={USER_ICON} className="m-2 w-7 h-7 bg-gray-300 rounded-full" />
        {/* <Link to="/about">
          <div className="m-2">About</div>
        </Link> */}
      </div>
    </div>
  );
};
export default Header;
