import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/config";

import useAxiosAuth from "@/config/axiosClient";

import { useSession } from "next-auth/react";
import useUploadFile from "@/config/useUploadFile";

const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();
  const axiosAuthClient = useAxiosAuth()
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const { uploadSingle } = useUploadFile();

 

  return {  };
};

export default useAuthModule;
