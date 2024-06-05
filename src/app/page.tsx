import nav from "@/app/Navbar"
import Hero from "@/app/components/hero"
import Cards from "@/app/components/cards"
import Image from "next/image"
import Contact from "@/app/components/contact"
import Project from "@/app/components/project"


export default function page() {
  return (
   <div>

     <div style={{
      zIndex: -1,
      position: "absolute",
  
    }}>
     
    </div>
    <div className="select-all">
    <Hero />
    </div>
    <div className="flex-row justify-center items-center"> 
    <Project />
    <Contact />
    </div>
  </div>
)
};

  
    