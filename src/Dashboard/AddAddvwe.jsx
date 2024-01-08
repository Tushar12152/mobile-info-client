import { imageUpload } from "../APIS/UploadImage";
import Title from "./Title";

const AddAddver = () => {

   const handleSubmit=async e=>{
         e.preventDefault()
         const form=e.target;
         const title=form.title.value;
         const description=form.description.value;
         const Company=form.Company.value;
         const photo=form.photo.files[0]
         const img=await imageUpload(photo)
         const image=img?.data?.display_url;

         console.log(title,description,Company,image);
   }

    return (
        <div>
             <Title heading={'Add Addvertisement'}></Title>


<form onSubmit={handleSubmit}>
<div className="flex gap-2">
      <div className="form-control w-[20%]">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Title" className="input input-bordered border-purple-500" required />
        </div>
        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input type="text" name="description" placeholder="Description" className="input input-bordered border-purple-400" required />        
        </div>

        <div className="form-control  w-[20%]">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input type="text" name="Company" placeholder="Company" className="input border-purple-300 input-bordered" required />        
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


        <div className="form-control  w-[20%]">
        <label className="label">
            <span className="label-text">Submit</span>
          </label>
        <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 ">Add This</button>     
        </div>


             </div>
</form>


        </div>
    );
};

export default AddAddver;