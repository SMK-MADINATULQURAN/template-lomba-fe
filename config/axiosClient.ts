

import axios, { AxiosInstance } from "axios";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

const useAxiosAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      (config: any) => {
        config.headers[
          "Authorization"
        ] = `Bearer ${session?.user?.accessToken}`;

        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseIntercept = axiosClient.interceptors.response.use(
      async (response: any) => response,
      async (error: any) => {
        alert("autho");
        signOut();
        window.location.replace("/auth/login");
      }
    );

    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return axiosClient;
};

export default useAxiosAuth;





export interface BaseResponseSuccess {
  status: string;
  message: string;
  data: any[] | any;
}

export interface BaseResponsePagination {
  status: string;
  message: string;
  data: any[];
  pagination: {
    page: number;
    total_page: number;
    pageSize: number;
    total: number;
  };
}

export interface BasePayloadPagination {
  page: number;
  pageSize: number;
}
