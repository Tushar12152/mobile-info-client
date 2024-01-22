import { useLoaderData } from "react-router-dom";
import Responsive from './../Utils/Responsive';

const MobileDetail = () => {
    const details=useLoaderData()
    // console.log(details);

    const {battery,brand,camara, color,faceLock,finger, flash,fontCamara,image,name,network,price,processor,radio,ram,rom,screen,sim,status, usb}=details
    return (
        <div className="mt-5 w-[50%] mx-auto pb-10">
            <Responsive>
                  <h1 className="text-center font-bold text-3xl py-5">{name},s Details</h1>
                 <div className="mx-auto ">
                 <img className="mx-auto py-10 w-[200px] animate-bounce mt-5" src={image} alt="" />
                 </div>
                 <div className="border-2 border-b-0 border-black  w-full">
                            <h1 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold ">Basic Info</h1>
                         </div>

                    <div className="flex ">
                         <div className="border-2 border-black  w-[50%]">
                            <h1 className="text-center">Device Name</h1>
                         </div>
                         
                         <div className="border-2 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{name}</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Brand</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{brand}</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Back camara</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{camara} MP</h1>
                         </div>   
                    </div>


                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Price</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{price}</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Status</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{status}</h1>
                         </div>   
                    </div>

   

   <div className="mt-2">
   <div className="border-2 border-b-0 border-black  w-full">
                            <h1 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold ">Key Space</h1>
                         </div>

                    <div className="flex ">
                         <div className="border-2 border-black  w-[50%]">
                            <h1 className="text-center">Battery</h1>
                         </div>
                         
                         <div className="border-2 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{battery} Amp</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Font Camara</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{fontCamara} Mp</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Processor</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{processor} </h1>
                         </div>   
                    </div>


                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Ram</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{ram} gb</h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Rom</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{rom} gb</h1>
                         </div>   
                    </div>
   </div>
 


   <div className="mt-2">
   <div className="border-2 border-b-0 border-black  w-full">
                            <h1 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold ">Design</h1>
                         </div>

                    <div className="flex ">
                         <div className="border-2 border-black  w-[50%]">
                            <h1 className="text-center">color</h1>
                         </div>
                         
                         <div className="border-2 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{color} </h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">flash</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{flash} </h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Screen</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{screen} </h1>
                         </div>   
                    </div>


                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">Radio</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{radio} </h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">usb</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{usb}</h1>
                         </div>   
                    </div>
   </div>



   
   <div className="mt-2">
   <div className="border-2 border-b-0 border-black  w-full">
                            <h1 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold ">Internal</h1>
                         </div>

                    <div className="flex ">
                         <div className="border-2 border-black  w-[50%]">
                            <h1 className="text-center">faceLock</h1>
                         </div>
                         
                         <div className="border-2 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{faceLock} </h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">finger</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{finger} </h1>
                         </div>   
                    </div>

                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">network</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{network} </h1>
                         </div>   
                    </div>


                    <div className="flex ">
                         <div className="border-2 border-t-0 border-black  w-[50%]">
                            <h1 className="text-center">sim</h1>
                         </div>
                         
                         <div className="border-2 border-t-0 border-l-0 border-black  w-[50%] ">
                            <h1 className="text-center">{sim} </h1>
                         </div>   
                    </div>

                    
   </div>
                    
            </Responsive>
        </div>
    );
};

export default MobileDetail;