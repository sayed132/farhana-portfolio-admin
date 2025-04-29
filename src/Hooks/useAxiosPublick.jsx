import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://farhans-s-server.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
