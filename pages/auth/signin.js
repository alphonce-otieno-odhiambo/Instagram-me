import { async } from '@firebase/util'
import { getProviders, signIn} from "next-auth/react";
import React from 'react'

function signin({providers}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers
        }
    }
}

export default signin