import { useQuery } from "@tanstack/react-query";
import Title from "./Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDelete, MdModeEdit } from "react-icons/md";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddedAddver = () => {
    
   const axiosSecure=useAxiosSecure()

    const { data:adds= [],refetch } = useQuery({
        queryKey: ['add'],
        queryFn: async () => {
          const res = await axiosSecure.get('/adds');
          return res.data;
        },
      });







const handleDelete=(id,item)=>{
    
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      
      axiosSecure.delete(`/mobiles/${id}`)
      .then(res=>{
            if(res.data.deletedCount>0){
                swal('succeess',`${item} is deleted!`,'success')
                refetch()
            }
      })
      .catch(err=>{
           toast.error(err.message)
      })


    } else {
      swal("Your imaginary file is safe!");
    }
  });

}



    return (
        <div>
             <Title heading={'Added-Addvertisement'}></Title>



             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Title</th>
        <th>Company</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {adds.map((add,i)=> <tr key={add._id}>
        <th>
          {i+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
             
            </div>
            <div>
              <div className="font-bold">{add?.title}</div>
             
            </div>
          </div>
        </td>
        <td>
         {add?.Company}
        </td>
        <td><Link to={`/dashboard/update/${add?._id}`}><button className="text-2xl text-purple-500"><MdModeEdit /></button></Link></td>
        <th>
          <button onClick={()=>handleDelete(add?._id,add?.name)} className="text-2xl text-pink-500"><MdDelete/></button>
        </th>
      </tr>)}
     
      
     
    </tbody>
  
    
  </table>
</div>

        </div>
    );
};

export default AddedAddver;