import Stories from "./Stories"


function Feed() {
  return (
    <main className="grid grid-cols-1  md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mx-w-6xl mx-auto">

         {/* section*/}
         <section className="col-span-2">
            {/* Stories*/}
            <Stories/>
            {/* Posts*/}
         </section>
            

        {/* section*/}
        <section>
            {/* mini profile*/}
            {/* Suggestions*/}
        </section>
            
        
    </main>
  )
}

export default Feed