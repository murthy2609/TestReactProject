import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FetchExampleComponent = () => {
    const [data,setData]= useState(null);
    const fetchData = async()=>{
        try{
            //make the GET api call to fetch 100 posts 
            const response = await 
            fetch("https://jsonplaceholder.typicode.com/posts");
            if(!response.ok){
                throw new Error ("cannot access the data through network")
            }
            const result = await response.json();
            setData(result)
        }catch(error){
            console.error("error fetching the data")
        }

    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      {console.log(data)}
      <table border={3}>
      {
        data.map(item =>(
            <tr border={3}><td border={3}>{item.userId}</td>
            <td border={3}>{item.title}</td></tr>
            
        ))
      }
      </table>
    </div>
  )
}

export default FetchExampleComponent
