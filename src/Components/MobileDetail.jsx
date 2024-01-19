import { useLoaderData } from "react-router-dom";

const MobileDetail = () => {
    const details=useLoaderData()
    console.log(details);

    const {battery,brand,camara, color,faceLock,finger, flash,fontCamara,image,name,network,price,processor,radio,ram,rom,screen,sim,status, usb}=details
    return (
        <div>
           <h1>{battery}</h1>
           <h1>{brand}</h1>
           <h1>{camara}</h1>
        </div>
    );
};

export default MobileDetail;