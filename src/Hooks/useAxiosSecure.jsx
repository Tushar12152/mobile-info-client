import axios from "axios";

const axiosSecure=axios.create({
    baseURL:'https://mobile-info-server.vercel.app/'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;