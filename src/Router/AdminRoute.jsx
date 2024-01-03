
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const  {user,loading}=useAuth()

    const axiosSecure=useAxiosSecure()
    const usersMail=user?.email;
    


    const { data: users = [] } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      },
    });

    const loggeduser=users.find(user=>user.email===usersMail)



    const admin=loggeduser?.role==='admin'
    // console.log(admin);

    if(loading){
        return (
            <div className="flex flex-col gap-2 items-center justify-center mt-40">
               <progress className="progress progress-error w-56" value={0} max="100"></progress>
      <progress className="progress progress-error w-56" value="10" max="100"></progress>
      <progress className="progress progress-error w-56" value="40" max="100"></progress>
       <progress className="progress progress-error w-56" value="70" max="100"></progress>
      <progress className="progress progress-error w-56" value="100" max="100"></progress>
            </div>
          );
    }

    if(user){
         if(admin){
            return children;
         }
         return <Navigate to='/'></Navigate>
    }
    
   toast.error('you are not logged in')






 
};

AdminRoute.propTypes = {
    children:PropTypes.node,
};

export default AdminRoute;