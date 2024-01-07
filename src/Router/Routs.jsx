import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import AddMobile from "../Dashboard/AddMobile";
import AddedMobile from "../Dashboard/AddedMobile";
import AdminRoute from './AdminRoute';
import UpdateMobile from "../Dashboard/UpdateMobile";
import AddAddver from "../Dashboard/AddAddvwe";
import AddedAddver from "../Dashboard/AddedAddver";

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
        element:<AdminRoute>
            <Dashboard/>
        </AdminRoute>,
        children:[
            {
                path:'/dashboard/add-mobile',
                element:<AdminRoute>
                    <AddMobile/>
                </AdminRoute>
            },
            {
                path:'/dashboard/added-mobile',
                element:<AdminRoute>
                    <AddedMobile/>
                </AdminRoute>
            },
            {
                path:'/dashboard/update/:id',
                element:<AdminRoute>
                    <UpdateMobile/>
                </AdminRoute>,
                loader:({params})=>fetch(`http://localhost:5002/mobiles/${params.id}`)
            },
            {
                path:"/dashboard/add-addvertisement",
                element:<AddAddver/>
            },
            {
                path:"/dashboard/added-addvertisement",
                element:<AddedAddver/>
            },
        ]
    }
])

export default Routs;