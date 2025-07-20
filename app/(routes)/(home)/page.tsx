"use client" //page sayfalarında use clint kullanma baska componette kullan homda onu cagır
import useStore from "@/zustand/useStore";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setText1 } from "@/redux/uiSlice";

export default function Home() {
  const {setText} = useStore()
  const dispatch = useDispatch()
  return (
    <div>
      Home
      <Image src="/siteMap.png" alt="Arka Plan" width={850} height={530} />
      <div className="bg-red-500 mt-4">
        <input 
        type="text"
        className="w-full"
        onChange={(e)=>setText(e.target.value)} />
      </div>
      <div className="bg-blue-500 mt-4">
        <input 
        type="text"
        className="w-full"
        onChange={(e)=>dispatch(setText1(e.target.value))} />
      </div>
    </div>
  );
}
