import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [catFact,setCatFact]=useState("")
  const fetchData=async()=>{
    const {data}=await axios.get("https://catfact.ninja/fact")
    setCatFact(data.fact)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="App h-screen gap-10 flex flex-col justify-center items-center bg-slate-300">
      <div className="">
      <button className="bg-black text-white px-3 py-1 text-3xl font-semibold  rounded-lg" onClick={fetchData}>Click</button>
      </div>
      <div>
      <h1 className="text-black px-3 py-2 bg-white w-[500px] text-center">{catFact}</h1>
      </div>
    </div>
  );
}

export default App;
