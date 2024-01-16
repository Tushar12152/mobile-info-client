import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "./Title";
import useAuth from "../Hooks/useAuth";

const ManageUsers = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const usersMail=user?.email
    // console.log(usersMail);
    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const res = await axiosSecure.get('/users');
          return res.data;
        },
      });
  
    //   console.log(users);

    const withOutThisUSer=users.filter(user=>user?.email!==usersMail)
    console.log(withOutThisUSer);

  

      const handleDelete=(id,name)=>{
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
      {withOutThisUSer.map((user,i)=> <tr key={user._id}>
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
        <td><button className=" btn bg-purple-500 text-white">{user?.role} </button></td>
        <th>
          <button onClick={()=>handleDelete(user?._id,user?.name)} className="btn bg-pink-500 text-white">Remove</button>
        </th>
      </tr>)}
     
      
     
    </tbody>
  
    
  </table>
</div>

             
        </div>
    );
};

export default ManageUsers;