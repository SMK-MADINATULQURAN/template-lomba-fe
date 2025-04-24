"use client";
import { useRef, useState } from "react";
import Button from "../components/Button";
import { useDisclosure } from "@/config";


const Home = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <section className="h-screen w-screen space-y-5">
    <h1>Siap LOomba LKS</h1>


    
      
    </section>
  );
};

export default Home;
