import Responsive from "../Utils/Responsive";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
    return (
      <Responsive>
          <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img className="lg:w-36 w-20" src={'https://i.ibb.co/B3hFDNN/mobile-phone-in-hand-with-information-on-display-line-icon-info-for-customer-on-smartphone-screen-li.jpg'} alt="" />

    <h1 className="font-bold lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
    Mobile Info
</h1>
  </div>
  <div className="flex-none gap-2">
    <div className=" flex gap-1">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 "><FaSearch /></button>
    </div>
    
  </div>
</div>
        </div>
      </Responsive>
    );
};

export default Nav;