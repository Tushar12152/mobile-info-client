import Title from "./Title";

const AddMobile = () => {
    return (
        <div>
             <Title heading={'Add Mobile'}></Title>


             <form className="card-body">

             <div className="flex gap-2">
      <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">Phone Name</span>
          </label>
          <input type="text" name="mobile-name" placeholder="Phone Name" className="input input-bordered border-purple-500" required />
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
            <span className="label-text">Camara</span>
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
          <input type="text" name="finger-print" placeholder="Finger-Print" className="input input-bordered border-purple-500" required />
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
            <span className="label-text">Video</span>
          </label>
          <input type="text" name="video" placeholder="Video" className="input border-pink-500 input-bordered" required />        
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