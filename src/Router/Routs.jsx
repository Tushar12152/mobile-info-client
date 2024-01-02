import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import AddMobile from "../Dashboard/AddMobile";
import AddedMobile from "../Dashboard/AddedMobile";

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
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard/add-mobile',
                element:<AddMobile/>
            },
            {
                path:'/dashboard/added-mobile',
                element:<AddedMobile/>
            },
        ]
    }
])

export default Routs;