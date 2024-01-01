import useAuth from "../Hooks/useAuth";

const Footer = () => {

    const {googlepopUp}=useAuth()

    const handleLogin=()=>{
        googlepopUp()
        
        .then(res=>{
             console.log(res.user);

             const admininfo={
               name:res?.user?.displayName,
               email:res?.user?.email,
               role:"user",
               img:res?.user?.photoURL
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
    <button onClick={handleLogin} className="link link-hover">Go to Dashboard</button>
   
  </nav>
</footer>
        </div>
    );
};

export default Footer;