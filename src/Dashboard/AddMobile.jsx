import swal from "sweetalert";
import { imageUpload } from "../APIS/UploadImage";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "./Title";
import useAuth from './../Hooks/useAuth';

const AddMobile = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const  addedBy=user?.email;

   const handleSubmit=async e=>{
       e.preventDefault()
     
       const form=e.target;
       const name=form.mobile.value;
       const brand=form.brand.value;
       const ram=form.ram.value;
       const rom=form.rom.value;
       const battery=form.battery.value;
       const processor=form.processor.value;
       const camara=form.camara.value;
       const price=form.price.value;
       const color=form.color.value;
       const screen=form.screen.value;
       const finger=form.finger.value;
       const flash=form.flash.value;
       const status=form.status.value;
       const network=form.network.value;
       const photo=form.photo.files[0]
       const img=await imageUpload(photo)
       const image=img?.data?.display_url;
       const fontCamara=form.fontCamara.value;
       const sim=form.sim.value;
       const usb=form.usb.value;
       const radio=form.radio.value;
       const faceLock=form.faceLock.value;

       const mobile={
        name,brand,ram,rom,battery,processor,camara,price,color,screen,finger,flash,status,network,image,addedBy,fontCamara,sim,usb,radio,faceLock
       }

     const result=await axiosSecure.post('/mobiles',mobile)
      if(result.data.insertedId){
        swal('success','Your mobile is added','success')
    }



//  console.log(name,brand,ram,rom,battery,processor,camara,price,color,screen,finger,flash,status,network,image);


   }




    return (
        <div>
             <Title heading={'Add Mobile'}></Title>


             <form onSubmit={handleSubmit} className="card-body">

             <div className="flex gap-2">
      <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">Phone Name</span>
          </label>
          <input type="text" name="mobile" placeholder="Phone Name" className="input input-bordered border-purple-500" required />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input type="text" name="brand" placeholder="Brand" className="input input-bordered border-purple-400" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Ram</span>
          </label>
          <input type="text" name="ram" placeholder="Ram" className="input border-purple-300 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Rom</span>
          </label>
          <input type="text" name="rom" placeholder="Rom" className="input border-pink-400 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Battery</span>
          </label>
          <input type="text" name="battery" placeholder="Battery" className="input border-pink-500 input-bordered" required />        
        </div>






             </div>

             <div className="flex gap-2">
      <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">Processor</span>
          </label>
          <input type="text" name="processor" placeholder="Processor" className="input input-bordered border-purple-500" required />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Back Camara</span>
          </label>
          <input type="text" name="camara" placeholder="Camara" className="input input-bordered border-purple-400" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input border-purple-300 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Color</span>
          </label>
          <input type="text" name="color" placeholder="Color" className="input border-pink-400 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Screen</span>
          </label>
          <input type="text" name="screen" placeholder="Screen" className="input border-pink-500 input-bordered" required />        
        </div>






             </div>

             <div className="flex gap-2">
      <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">Finger-Print</span>
          </label>
          <input type="text" name="finger" placeholder="Finger-Print" className="input input-bordered border-purple-500" required />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Flash</span>
          </label>
          <input type="text" name="flash" placeholder="Flash" className="input input-bordered border-purple-400" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input type="text" name="status" placeholder="Status" className="input border-purple-300 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Network</span>
          </label>
          <input type="text" name="network" placeholder="Network" className="input border-pink-400 input-bordered" required />        
        </div>

        


        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
                className="input border-pink-500 input-bordered"
                required
                type='file'
                id='image'
                name='photo'
                accept='image/*'
              />
         
        </div>



             </div>






             <div className="flex gap-2">
      <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">Font-Camara</span>
          </label>
          <input type="text" name="fontCamara" placeholder="Font-Camara" className="input input-bordered border-purple-500" required />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Sim</span>
          </label>
          <input type="text" name="sim" placeholder="Sim" className="input input-bordered border-purple-400" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Usb</span>
          </label>
          <input type="text" name="usb" placeholder="Usb" className="input border-purple-300 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Radio</span>
          </label>
          <input type="text" name="radio" placeholder="Radio" className="input border-pink-400 input-bordered" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Face-lock</span>
          </label>
          <input type="text" name="faceLock" placeholder="Face-lock" className="input border-pink-500 input-bordered" required />        
        </div>






             </div>













            

        <div className="form-control mt-6">
          <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 ">Add This Mobile</button>
        </div>
             </form>

        </div>
    );
};

export default AddMobile;