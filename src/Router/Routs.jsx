import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";

const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    }
])

export default Routs;