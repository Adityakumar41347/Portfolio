import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (

    <div>
      <div className="bg-red-50 mx-auto container w-full h-90 flex p-2 grid-cols-2  items-center">
        <div className=" w-[70%] flex flex-col items-center">
          
            <h1  className="font-bold text-3xl">Hey, I am Aditya</h1>
            <h1 className="font-bold text-3xl">Creative Technologist</h1>
            <p className="w-200 overflow-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aspernatur libero magnam maiores pariatur consequatur, voluptatum eum. Nam, quo cumque iusto laborum dolor autem temporibus ea aperiam? Doloribus magnam aliquid aspernatur quis nostrum vitae expedita itaque facilis. Cumque quae enim commodi quas dolore, eum nobis, rerum quia, optio mollitia iure.</p>
          
        </div>
        <img src="/profile.jpg" alt="image not found" className="w-60 h-60 object-cover rounded-full" />
      </div>
    </div>
  );
}
