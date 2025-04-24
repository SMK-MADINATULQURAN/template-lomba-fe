import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useSession } from "next-auth/react";
import useAxiosAuth from "@/config/axiosClient";

const useAuthModule = () => {
  const axiosClient = useAxiosAuth();

  const useGet = () => {
    const {data, isFetching} = useQuery({
      queryFn: () => axiosClient.get("tes"),
      queryKey: ["testing"],
      select : (res) => res.data

      
    });

    return {data, isFetching}

  }
  const useCreate = () => {
    const queryClient = useQueryClient();

    const mutate = useMutation({
      mutationFn: () => axiosClient.get("tambaddh"),
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
