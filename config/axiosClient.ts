import axios, { AxiosInstance } from "axios";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import Cookies from "js-cookie";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});



const useAxiosAuth = () => {
  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      (config: any) => {
        const token = Cookies.get("token-app");
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseIntercept = axiosClient.interceptors.response.use(
      async (response: any) => response,
      async (error: any) => {
        if (401 === error?.response?.status) {
          localStorage.clear();
          window.location.replace("/auth/login");
        } else {
          return Promise.reject(error);
        }
        alert("autho");
        // signOut();
        // window.location.replace("/auth/login");
      }
    );

    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, []);

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

