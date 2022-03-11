import React, {useState, useEffect} from 'react'
import faker from '@faker-js/faker';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i)=> ({
            ...faker.helpers.contextualCard(),
            id:i,
            }))
            setSuggestions(suggestions);
    }, [])
    
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3  className='text-sm  text-grey-50'>We have a suggestion for you</h3>
            <button className='text-grey-600 font-semibold'>See all</button>
        </div>
        {
            suggestions.map(profile => (
                <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img className='h-10 w-10 rounded-full border p-[2px]' src={profile.avatar} alt=''/>

                </div>
            ))
        };
    </div>
  )
}

export default Suggestions