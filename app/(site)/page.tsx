
import Image from "next/image"
import AuthForm from "./components/AuthForm"
export default function Home() {
  return (
    <div className="
      flex
      min-h-full
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-gray-100
      "> 
      Hello index page 
      <div className="sm:mx-auto sm:w-full sm:max-w-md"> 
        <Image

        />
        <h2 className="mt-6 text-center text-3xl font-bold
        text-gray-900 tracking-tight"> Sign in to your account</h2>
      

      </div>
      {/*Authform*/}
    </div>
    
  )
}
