import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AdminProfile = () => {
   
    const axiosSecure=useAxiosSecure()
  
   


    const { data: users = [] } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      },
    });

    console.log(users);





    return (
        <div>
            
        </div>
    );
};

export default AdminProfile;