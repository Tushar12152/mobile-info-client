import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "./Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateMobile = () => {
  const data = useLoaderData();
  const axiosSecure=useAxiosSecure()
  const navigate=useNavigate()

const handleSubmit=(e)=>{
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
      
       const fontCamara=form.fontCamara.value;
       const sim=form.sim.value;
       const usb=form.usb.value;
       const radio=form.radio.value;
       const faceLock=form.faceLock.value;

       const UpdateMobileData={
        name,brand,ram,rom,battery,processor,camara,price,color,screen,finger,flash,status,network,fontCamara,sim,usb,radio,faceLock
       }

      //  console.log(UpdateMobileData);

       axiosSecure.patch(`/mobiles/${data?._id}`,UpdateMobileData)
       .then(res=>{
           if(res.data.modifiedCount>0){
                   toast.success(`${name} is successfully Updated`)
                   navigate(-1)
            }
       })


}



  return (
    <div>
      <Title heading={`Update ${data.name}`}></Title>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="flex gap-2">
          <div className="form-control w-[20%]">
            <label className="label">
              <span className="label-text">Phone Name</span>
            </label>
            <input
              defaultValue={data.name}
              type="text"
              name="mobile"
              placeholder="Phone Name"
              className="input input-bordered border-purple-500"
              required
            />
          </div>
          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
             defaultValue={data.brand}
              type="text"
              name="brand"
              placeholder="Brand"
              className="input input-bordered border-purple-400"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Ram</span>
            </label>
            <input
             defaultValue={data.ram}
              type="text"
              name="ram"
              placeholder="Ram"
              className="input border-purple-300 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Rom</span>
            </label>
            <input
             defaultValue={data.rom}
              type="text"
              name="rom"
              placeholder="Rom"
              className="input border-pink-400 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Battery</span>
            </label>
            <input
             defaultValue={data.battery}
              type="text"
              name="battery"
              placeholder="Battery"
              className="input border-pink-500 input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="form-control w-[20%]">
            <label className="label">
              <span className="label-text">Processor</span>
            </label>
            <input
             defaultValue={data.processor}
              type="text"
              name="processor"
              placeholder="Processor"
              className="input input-bordered border-purple-500"
              required
            />
          </div>
          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Back Camara</span>
            </label>
            <input
             defaultValue={data.camara}
              type="text"
              name="camara"
              placeholder="Camara"
              className="input input-bordered border-purple-400"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
             defaultValue={data.price}
              type="text"
              name="price"
              placeholder="Price"
              className="input border-purple-300 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Color</span>
            </label>
            <input
             defaultValue={data.color}
              type="text"
              name="color"
              placeholder="Color"
              className="input border-pink-400 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Screen</span>
            </label>
            <input
             defaultValue={data.screen}
              type="text"
              name="screen"
              placeholder="Screen"
              className="input border-pink-500 input-bordered"
              required
            />
          </div>
        </div>

       

        <div className="flex gap-2">
          <div className="form-control w-[20%]">
            <label className="label">
              <span className="label-text">Font-Camara</span>
            </label>
            <input
             defaultValue={data.fontCamara}
              type="text"
              name="fontCamara"
              placeholder="Font-Camara"
              className="input input-bordered border-purple-500"
              required
            />
          </div>
          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Sim</span>
            </label>
            <input
             defaultValue={data.sim}
              type="text"
              name="sim"
              placeholder="Sim"
              className="input input-bordered border-purple-400"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Usb</span>
            </label>
            <input
             defaultValue={data.usb}
              type="text"
              name="usb"
              placeholder="Usb"
              className="input border-purple-300 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Radio</span>
            </label>
            <input
             defaultValue={data.radio}
              type="text"
              name="radio"
              placeholder="Radio"
              className="input border-pink-400 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Face-lock</span>
            </label>
            <input
             defaultValue={data.faceLock}
              type="text"
              name="faceLock"
              placeholder="Face-lock"
              className="input border-pink-500 input-bordered"
              required
            />
          </div>
        </div>


        <div className="flex gap-2">
          <div className="form-control w-[20%]">
            <label className="label">
              <span className="label-text">Finger-Print</span>
            </label>
            <input
             defaultValue={data.finger}
              type="text"
              name="finger"
              placeholder="Finger-Print"
              className="input input-bordered border-purple-500"
              required
            />
          </div>
          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Flash</span>
            </label>
            <input
             defaultValue={data.flash}
              type="text"
              name="flash"
              placeholder="Flash"
              className="input input-bordered border-purple-400"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
             defaultValue={data.status}
              type="text"
              name="status"
              placeholder="Status"
              className="input border-purple-300 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Network</span>
            </label>
            <input
             defaultValue={data.network}
              type="text"
              name="network"
              placeholder="Network"
              className="input border-pink-400 input-bordered"
              required
            />
          </div>

          <div className="form-control  w-[20%]">
            <label className="label">
              <span className="label-text">Submit</span>
            </label>
            <input
              className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 "
             
              type="submit"
              value={`Update ${data?.name}`}
            />
          </div>
        </div>

      
      </form>
    </div>
  );
};

export default UpdateMobile;
