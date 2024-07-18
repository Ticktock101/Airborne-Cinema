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
      <div className="flex">
        <Job
        image=""
        title="Agriculture"
        />
        <Job
        image=""
        title="Civil"
        />
        <Job
        image=""
        title="Construction"
        />
      </div>
    </div>
    
  );
}
