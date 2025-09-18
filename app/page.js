import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (

    <div className=" bg-white ">
      <div className="first bg-white  mx-auto container w-full md:w-[80%]  flex p-2   flex-col  md:mt-4  ">
        <div className=" flex w-full items-center">
          <div className=" w-[70%] flex flex-col  md:px-30">

            <h1 className="font-bold text-3xl">Hey, I am Aditya</h1>
            <h1 className="font-bold text-3xl">Creative Technologist</h1>
            <p className=" mt-3 h-[120px] overflow-y-scroll no-scrollbar">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aspernatur libero magnam maiores pariatur consequatur, voluptatum eum. Nam, quo cumque iusto laborum dolor autem temporibus ea aperiam? Doloribus magnam aliquid aspernatur quis nostrum vitae expedita itaque facilis. Cumque quae enim commodi quas dolore, eum nobis, rerum quia, optio mollitia iure.</p>

          </div>
          <img src="/profile.jpg" alt="image not found" className="md:w-60 md:h-60 w-30 h-30 object-cover rounded-full" />
        </div>
        <button className="bg-red-400 p-4 rounded-full w-50 mt-2 md:mx-30 outline-red-900 text-white cursor-pointer">Download Resume</button>
      </div>
      <div className=" second bg-white  mx-auto container w-full md:w-[80%]  flex p-2  flex-col  md:mt-4">
        <div className="w-[91%] md:pl-30 flex justify-between my-2">
          <div className="text-blue-500">recents</div>
          <div className="text-blue-500">viewall</div>
        </div>
        <div className=" w-full md:w-[91%] md:ml-20  flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-white shadow-2xl w-[90%] md:w-1/2 h-60 md:ml-10 rounded-xl p-3">
            <h1 className=" text-xl font-bold">
              Making a design system from scratch
            </h1>
            <div>
              <p className="my-4 mb-5 flex gap-4">
                <span>12 Feb 2025</span>
                <span>|</span>
                <span>Design Pattern</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea provident numquam, voluptatum rem nemo ut esse minima ducimus dignissimos.
            </p>
          </div>
          <div className="bg-white shadow-2xl w-[90%] md:w-1/2 h-60 md:mr-20 rounded-xl p-3">
            <h1 className=" text-xl font-bold">
              Making a design system from scratch
            </h1>
            <div>
              <p className="my-4 mb-5 flex gap-4">
                <span>12 Feb 2025</span>
                <span>|</span>
                <span>Design Pattern</span>
              </p>


            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea provident numquam, voluptatum rem nemo ut esse minima ducimus dignissimos.
            </p>
          </div>
        </div>

      </div>
      <div className="third mx-auto container w-full md:w-[80%]  flex p-2  flex-col  md:mt-4 ">
       <h2 className="md:px-30">Feature Work</h2>
       <div className="md:px-30 flex gap-1 m-3">
          <img className="w-65 h-45 rounded-2xl" src="/Page-1.png" alt="not found " />
          <div className=" ">
            <h1 className="font-bold text-2xl">Designing Dashboards</h1>
            <div className="flex gap-3 py-4">
              <span className="bg-black rounded-full px-3 text-white" >2025</span>
              <span className="font-light">Dashboard</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus eligendi nostrum totam voluptatum consequuntur unde. Quisquam expedita quo cumque?</p>
          </div>
           
       </div>
         <hr className="w-[77%] border-t border-zinc-300 my-4 mx-auto" />

       <div className="md:px-30 flex gap-1 m-3">
          <img className="w-65 h-45 rounded-2xl" src="/Page-1.png" alt="not found " />
          <div className=" ">
            <h1 className="font-bold text-2xl">Designing Dashboards</h1>
            <div className="flex gap-3 py-4">
              <span className="bg-black rounded-full px-3 text-white" >2025</span>
              <span className="font-light">Dashboard</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus eligendi nostrum totam voluptatum consequuntur unde. Quisquam expedita quo cumque?</p>
          </div>
       </div>
       <hr className="w-[77%] border-t border-zinc-300 my-4 mx-auto" />
       <div className="md:px-30 flex gap-1 m-3">
          <img className="w-65 h-45 rounded-2xl" src="/Page-1.png" alt="not found " />
          <div className=" ">
            <h1 className="font-bold text-2xl">Designing Dashboards</h1>
            <div className="flex gap-3 py-4">
              <span className="bg-black rounded-full px-3 text-white" >2025</span>
              <span className="font-light">Dashboard</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus eligendi nostrum totam voluptatum consequuntur unde. Quisquam expedita quo cumque?</p>
          </div>
       </div>
       <hr className="w-[77%] border-t border-zinc-300 my-4 mx-auto" />
      
       
      </div>
      <Footer/>
    </div>
  );
}
