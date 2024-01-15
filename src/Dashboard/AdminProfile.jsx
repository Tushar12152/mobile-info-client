import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import Title from "./Title";

const AdminProfile = () => {
   
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const userMail=user?.email
    // console.log(userMail);


    const { data: users = [] } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      },
    });

    // console.log(users);

   const thisUser=users.find(user=>user.email===userMail)
//    console.log(thisUser);




    return (
        <div>
                 
                 <Title heading={`Welcome '${thisUser?.name||''}' to the Profile`}></Title>



                  <div>
                  <div className="flex flex-col md:flex-row items-center md:gap-24 w-full">
          <div className="md:w-1/2">
              <div className="avatar">
                  <div className="w-24 rounded-full ring ml-4 mt-20 ring-purple-500 ring-offset-base-100 ring-offset-2">
                      <img src={thisUser?.img} alt="Profile" />
                  </div>
              </div>
              <h1 className="text-xl font-bold mt-2">Email: <span className="lg:text-xl text-sm">{thisUser?.email}</span></h1>
              <h1 className="text-xl font-bold mt-2">Name:  <span className="lg:text-xl text-sm">{thisUser?.name}</span></h1>
             
          </div>
   
          <div className="lg:w-1/2  w-full mt-5 border-t-2 lg:border-0 border-[gradient-to-r from-purple-500 to-pink-500]">
            
          </div>
      </div>
                  </div>



        </div>
    );
};

export default AdminProfile;