import  { useState } from "react"

const First = () =>{
    const [color, setColor] = useState("yellow")
    return (
      
      
       <section className="w-full h-screen duration-200"
       style={{backgroundColor: color}}
       >
        <section className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <section className=" flex-wrap justify-center gap-e shadow-lg bg-white px-3 py-2  rounder-3xl">
                <button onClick={() => setColor("red")}
                 className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
                Red
                </button>
                <button onClick={() => setColor("blue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
                blue
                </button><button onClick={() => setColor("green")}
                 className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
                green
                </button><button onClick={() => setColor("black")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
                black
                </button><button onClick={() => setColor("orange")}
                 className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>
                orange
                </button><button onClick={() => setColor("yellow")}
                 className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>
                yellow
                </button><button onClick={() => setColor("pink")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>
                pink
                </button><button onClick={() => setColor("purple")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>
                purple
                </button>

            </section>
             </section>

       </section>
       
      )
}


export default First