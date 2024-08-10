import axios from "axios";

const BASE_URL = "https://pandooin.com/api/zamrood/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getData = async ({ url }: { url: string }) => {
  const response = await axiosInstance.get(url);
  return response;
};


