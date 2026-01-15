import React, { useEffect, useState } from 'react'

function GitHub() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/kumargaurav007')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])
  return (
    <>
      <div className='  p-5 m-5  flex items-center content-center'>
        <div className='ml-80 mt-10 mb-10'>
          <img src={data.avatar_url} alt="display picture" className='w-60 m-4 rounded' />
        </div>
        <div className='text-2xl ml-10 mt-10 mb-10'>
          <h1>Name : {data.name}</h1>
          <h4>User Id : {data.login}</h4>
          <h4>City : {data.location}</h4>
          <h4>Public Repository : {data.public_repos}</h4>
          <h4>Follower : {data.followers}</h4>
          <h4>Following : {data.following}</h4>
          <h4>URL : {data.html_url}</h4>
        </div>
      </div>
    </>
  )
}

export default GitHub