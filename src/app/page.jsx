import Image from "next/image";
import Navbar from "./components/navbar";
import Title from "./components/title";
import Pictures from "./components/pictures";
// import Job from "./components/job"
// import "./styling/homepage.css";

export default function Home() {
  return (
    <div className="h-screen w-full ">
      <Navbar className="self-end"/>
      <Title/>
      <div className="flex w-full justify-around items-center h-3/6">
        <Pictures
        image="/agricultureDroneImage.png"
        title="Agriculture"
        className=""
        />
        <Pictures
        image="/droneCivil.jpg"
        title="Civil"
        />
        <Pictures
        image="/droneConstruction.jpg"
        title="Construction"
        />
      </div>
      
      
    </div>
    
  );
}
