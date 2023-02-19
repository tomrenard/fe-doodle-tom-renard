import api from "../services/api";
import { useMutation, useQueryClient } from "react-query";

const token = import.meta.env.VITE_YOUR_AWESOME_UNIQUE_TOKEN;

const postMessages = async ({ message, author }) => {
  const response = await api.post(`/?token=${token}`, {
    message,
    author,
  });
  const { mutate } = response.data;
  return mutate;
};

export const usePostMessages = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (variables) => postMessages(variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["FetchMessages"] });
    },
  });
};

export default usePostMessages;
