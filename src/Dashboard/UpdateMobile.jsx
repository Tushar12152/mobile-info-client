import { useLoaderData } from "react-router-dom";
import Title from "./Title";

const UpdateMobile = () => {
      const data=useLoaderData()

    return (
        <div>
            <Title heading={`Update ${data.name}`}></Title>
            
        </div>
    );
};

export default UpdateMobile;