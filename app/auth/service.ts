import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useSession } from "next-auth/react";
import useAxiosAuth from "@/config/axiosClient";
import useUploadFile from "@/config/useUploadFile";
const useAuthModule = () => {
  const axiosClient = useAxiosAuth();
  const {uploadSingle} = useUploadFile();
  const queryClient = useQueryClient();

  const useGet = () => {
    const { data, isFetching } = useQuery({
      queryFn: () => axiosClient.get("tes"),
      queryKey: ["testing"],
      select: (res) => res.data,
    });

    return { data, isFetching };
  };
  const useCreate = () => {
    const mutate = useMutation({
      mutationFn: async(payload:any) => {
        const res = await uploadSingle(payload.file)

        
      payload  = {
          url : res.data.file_url
        }
        return axiosClient.post("auth/login", payload);
      },
      onSuccess: (res: any) => {
        queryClient.invalidateQueries(["testing"]);
      },
      onError: (err) => {},
    });
    return mutate;
  };

  return { useCreate, useGet };
};

export default useAuthModule;
