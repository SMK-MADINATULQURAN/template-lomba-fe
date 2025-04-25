"use client";
import { useRef, useState } from "react";
import Button from "../components/Button";
import { useDisclosure } from "@/config";
import useAuthModule from "./auth/service";

const Home = () => {
  const { useCreate } = useAuthModule();
  const mutate = useCreate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState({
    file: "",
    preview: "",
  });

  console.log("file", file);

  return (
    <section className="h-screen w-screen space-y-5">
      <h1>Siap LOomba LKS</h1>

      <iframe
        src={file.preview as string}
        width="600"
        height="400"

      >
        Your browser does not support iframes.
      </iframe>

      <label
        htmlFor="file">Upload Gamabr</label>
      <input
      id="file"
      className="hidden"
        onChange={(e: any) => {
          const file = e.target.files[0];
          setFile(() => {
            return {
              file: file,
              preview: URL.createObjectURL(file),
            };
          });
        }}
        type="file"
      ></input>

      <button
        onClick={() => {
          mutate.mutate({
            file: file.file,
            url: "",
            namae: "ihsan",
          });
        }}
      >
        Simpan
      </button>
    </section>
  );
};

export default Home;
