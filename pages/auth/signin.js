
import { getProviders, signIn} from "next-auth/react";
import React from 'react'
import Header from '../../components/Header';

//Browser
function Signin({providers}) {
  return (
    <>
    <Header/>

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-39 px-14 text-center">
      <img  
      className="w-80"
      src="https://links.papareact.com/ocw" alt=""/>
      <p className="font-xs italic">This is not a real app but built for education purposes </p>
        <div className="mt-40">
        {Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIn(provider.id, {callbackUrl:"/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>      
    </div>
   
    </>
  )
}


export default Signin;
//sever
export async function getServerSideProps(){
  const providers = await getProviders();
  return {
      props:{
          providers
      }
  }
}