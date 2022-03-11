import React, {useState, useEffect} from 'react'
import faker from '@faker-js/faker';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
     const suggestions = [...Array(5)].map((_, i)=>[{
         ...faker.helpers.contextualCard(),
         id:i
     }])
     setSuggestions(suggestions);
    }, [])
    
  return (
    <div>Suggestions</div>
  )
}

export default Suggestions