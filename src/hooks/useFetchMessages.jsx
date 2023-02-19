import api from "../services/api";
import { useQuery } from "react-query";

const token = import.meta.env.VITE_YOUR_AWESOME_UNIQUE_TOKEN;

const fetchMessages = async () => {
  const response = await api.get(`/?token=${token}`);
  return response.data;
};

export const useFetchMessages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FetchMessages"],
    queryFn: fetchMessages,
  });
  return { data, isLoading };
};

export default useFetchMessages;
