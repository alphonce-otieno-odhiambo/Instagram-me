import Stories from "./Stories"
import Posts from "./Posts"
import Miniprofile from "./Miniprofile"
import Suggestions from "./Suggestions"


function Feed() {
  return (
    <main className="grid grid-cols-1  md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mx-w-6xl mx-auto">

         {/* section*/}
         <section className="col-span-2">
            {/* Stories*/}
            <Stories/>
            {/* Posts*/}
            <Posts/>
         </section>
            

        {/* section*/}
        <section className="hidden xl:inline-grid md:col-span-1">
            <div className="fixed top-20">
                 {/* mini profile*/}
            <Miniprofile/>
           
           {/* Suggestions*/}
           <Suggestions/>
            </div>
           
        </section>
            
        
    </main>
  )
}

export default Feed