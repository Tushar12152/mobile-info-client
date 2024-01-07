import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Dashboard = () => {
    const navigate=useNavigate()
    const {logOut}=useAuth()
const handleLogOut=()=>{
    logOut()
    .then(()=>{
        toast.success("You are logged out ")
        navigate('/')
  
   
      })
      .catch(err=>{
         toast.error(err.message)
      })
    }



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
                            <li>
                                <NavLink to="/dashboard/add-addvertisement">
                                    Add Addvertisement
                                  </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/added-addvertisement">
                                    Added Addvertisement
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
                    <li>
                        <button onClick={handleLogOut}>
                            <FaSignOutAlt></FaSignOutAlt>
                           Log Out</button>
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