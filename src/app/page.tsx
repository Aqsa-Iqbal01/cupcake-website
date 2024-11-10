import Image from "next/image";
import Navbar from "./components/Navbar";
import "@/app/styles/home.css"
export default function Home() {
  return (
    
    <div className="home">
       <Navbar/>
     
      
    <div className="heading">
            <h1 >Welcome to Cakes Galore</h1>
            <p className="para">Your one-stop shop for delicious cakes!</p>
            </div>
        
     
    </div>
  )
}