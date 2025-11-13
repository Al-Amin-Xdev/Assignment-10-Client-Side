import axios from "axios"

const AxiosInstance = axios.create({
  baseURL: 'https://krishi-link-server-five.vercel.app'
})

const useAxios =()=>{
  return AxiosInstance;
}

export default useAxios