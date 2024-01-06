import { useQuery } from "@tanstack/react-query";
import Title from "./Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDelete, MdModeEdit } from "react-icons/md";
import swal from "sweetalert";

const AddedMobile = () => {
    
   const axiosSecure=useAxiosSecure()

    const { data:mobiles= [],refetch } = useQuery({
        queryKey: ['mobile'],
        queryFn: async () => {
          const res = await axiosSecure.get('/mobiles');
          return res.data;
        },
      });


// console.log(mobiles);




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


    } else {
      swal("Your imaginary file is safe!");
    }
  });

}



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
        <td><button className="text-2xl text-purple-500"><MdModeEdit /></button></td>
        <th>
          <button onClick={()=>handleDelete(mobile?._id,mobile?.name)} className="text-2xl text-pink-500"><MdDelete/></button>
        </th>
      </tr>)}
     
      
     
    </tbody>
  
    
  </table>
</div>

        </div>
    );
};

export default AddedMobile;