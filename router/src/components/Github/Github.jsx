import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// useLoaderData is used to get the data from the loader function, and we can use it in our component.

function Github() {

  const data = useLoaderData()
  
    // const [data, setData] = useState([])

    // useEffect(()=> {
    //     fetch("https://api.github.com/users/surajgautam88")
    //     .then(res => res.json())
    //     .then(data => { console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers:{data.followers}
    <img  src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default Github

// loader useEffect se bhi fast hota hai, 

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/surajgautam88')
  return response.json()

}