import PropTypes from "prop-types";
import Responsive from "./../Utils/Responsive";
import Mobile from "./Mobile";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Mobiles = ({ mobiles }) => {
  // console.log(mobiles);

  const axiosSecure = useAxiosSecure();

  const { data: adds = [] } = useQuery({
    queryKey: ["add"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adds");
      return res.data;
    },
  });

//   console.log(adds);

  return (
    <div className="py-10">
      <Responsive>
        <div className="lg:flex gap-4 ">
          <div className="border-2 min-h-screen border-gray-300 lg:w-[80%]  mb-6 lg:mb-0 rounded-md">
            <div className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {mobiles.map((mobile) => (
                <Mobile key={mobile} mobile={mobile} />
              ))}
            </div>
          </div>
          <div className="border-2 min-h-screen border-gray-300 lg:w-[20%] rounded-md">
            {adds.map((add) => (
              <div key={add?._id}>
                <div className="card w-60 p-2 mx-auto mt-2 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src={add?.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{add?.Company}</h2>
                    <marquee  direction="left">{add?.title}</marquee>

                    <p>
                        {add?.description} 
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Responsive>
    </div>
  );
};

Mobiles.propTypes = {
  mobiles: PropTypes.array,
};

export default Mobiles;
