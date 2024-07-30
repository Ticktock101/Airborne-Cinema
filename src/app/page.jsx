import Image from "next/image";
import Navbar from "./components/navbar";
import Title from "./components/title";
import Job from "./components/job"
// import "./styling/homepage.css";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar className="self-end"/>
      <Title/>
      <div className="flex flex-wrap max-w-screen-lg w-full justify-between">
        <Job
        image="/agricultureDroneImage.jpg"
        title="Agriculture"
        />
        <Job
        image="/agricultureDroneImage.jpg"
        title="Civil"
        />
        <Job
        image="/agricultureDroneImage.jpg"
        title="Construction"
        />
      </div>
      
      
    </div>
    
  );
}
