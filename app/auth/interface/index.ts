import { BaseResponseSuccess } from "@/config/axiosClient";

interface User {
  id?: number;
  nama: string;
  email: string;
  password: string;
  refresh_token: string;
  access_token: string;
  avatar: string;
  role: string;
}

export interface LoginPayload extends Pick<User, "email" | "password"> {}
export interface RegisterPayload
  extends Pick<User, "nama" | "email" | "password"> {}

export interface RegisterResponse extends BaseResponseSuccess {}


export interface LoginResponse extends BaseResponseSuccess {
  data: User;
}

export interface ProfileResponse extends BaseResponseSuccess {
  data: User;
}

export interface ProfileUpdatePayload
  extends Pick<User, "avatar" | "nama" | "id"> {
  file?: File;
}

enum KategoriProduk {
  Handphone = "handphone",
  Laptop = "laptop",
  Mobil = "mobil",
  Motor = "motor",
}

interface Produk {
  id?: number;
  nama_produk: string;
  kategori_produk: KategoriProduk;
  harga_produk: number;
  jumlah_produk: number;
  deskripsi_produk : number;
  tahun_pembuatan : number;
  created_date: Date;
  updated_date: Date;
  
}
