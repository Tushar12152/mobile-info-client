import { useQuery } from "@tanstack/react-query";
import Title from "./Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDelete, MdModeEdit } from "react-icons/md";

const AddedMobile = () => {
    
   const axiosSecure=useAxiosSecure()

    const { data:mobiles= [] } = useQuery({
        queryKey: ['mobile'],
        queryFn: async () => {
          const res = await axiosSecure.get('/mobiles');
          return res.data;
        },
      });


// console.log(mobiles);


    return (
        <div>
             <Title heading={'My-Added-Mobile'}></Title>



             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Added by</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {mobiles.map((mobile,i)=> <tr key={mobile._id}>
        <th>
          {i+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
             
            </div>
            <div>
              <div className="font-bold">{mobile?.name}</div>
             
            </div>
          </div>
        </td>
        <td>
         {mobile?.addedBy}
        </td>
        <td><button className="text-2xl"><MdModeEdit /></button></td>
        <th>
          <button className="text-2xl"><MdDelete/></button>
        </th>
      </tr>)}
     
      
     
    </tbody>
  
    
  </table>
</div>

        </div>
    );
};

export default AddedMobile;