import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link} from "react-router-dom";
import toast from "react-hot-toast";


const Footer = () => {

    const {googlepopUp,user}=useAuth()
    const axiosSecure=useAxiosSecure()
  
   


    const { data: users = [] } = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      },
    });

    // console.log(users);

    
 
    


    const handleLogin=()=>{
        googlepopUp()
        
        .then(res=>{
            //  console.log(res.user);

             const admininfo={
               name:res?.user?.displayName,
               email:res?.user?.email,
               role:"user",
               img:res?.user?.photoURL
             }

             const sameUser = users.find(user => user.email === res?.user?.email);

             if(!sameUser){
               axiosSecure.post('/users', admininfo)
                 .then(res => {
                   if (res.data.insertedId) {
                     toast.success('You are signed in');
                   } else {
                     toast.error('Failed to add user info');
                   }
                 })
                 .catch(err => {
                   toast.error('Error adding user info: ' + err.message);
                 });
             } else {
               toast.success('Your Info is already in the Database');
             }
      

          

        })
        .catch(err=>{
            console.log(err.message);
        })
    }


    return (
        <div>
            <footer className="footer grid-rows-2 p-10 bg-black text-white">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <nav>
    <header className="footer-title">Social</header> 
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">Github</a>
  </nav> 
  <nav>
  <header className="footer-title">Admin</header> 
    <button onClick={handleLogin} className="link link-hover">Sign in      {user?'(logged In)':''}</button>
  
    <Link to='/dashboard' className="link link-hover">Dashboard</Link>
   
  </nav>
</footer>
        </div>
    );
};

export default Footer;