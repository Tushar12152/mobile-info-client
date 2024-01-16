import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "./Title";

const ManageUsers = () => {
    const axiosSecure=useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const res = await axiosSecure.get('/users');
          return res.data;
        },
      });
  
      console.log(users);
  

      const handleDelete=(id)=>{
           console.log(id);
      }



    return (
        <div>

            <Title heading={'Manage Users'}></Title>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        
      </tr>
    </thead>
    <tbody>
      {users.map((user,i)=> <tr key={user._id}>
        <th>
          {i+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
             
            </div>
            <div>
              <div className="font-bold">{user?.name}</div>
             
            </div>
          </div>
        </td>
        <td>
         {user?.email}
        </td>
        <td><button className="text-2xl text-purple-500">{user?.role} </button></td>
        <th>
          <button onClick={()=>handleDelete(user?._id,user?.name)} className="text-2xl text-pink-500">Remove</button>
        </th>
      </tr>)}
     
      
     
    </tbody>
  
    
  </table>
</div>

             
        </div>
    );
};

export default ManageUsers;