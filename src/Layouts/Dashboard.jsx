import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-12 h-full">
              
            <div className="col-span-5 md:col-span-3  min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <ul className="menu p-4">
                    {
                         <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                               
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-mobile">
                                       Add Mobile
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/added-mobile">
                                    Added Mobile
                                  </NavLink>
                            </li>
                           
                        </>
                           
                    }




                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="col-span-7 md:col-span-9  p-4 md:p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;