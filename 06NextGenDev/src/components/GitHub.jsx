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
          <img src={data.avatar_url} alt="display picture" className='w-60 m-4 rounded-2xl border-3 border-black' />
        </div>
        <div className='text-xl ml-10 mt-10 mb-10'>
          <h1>Name : <span className='font-bold'> {data.name}</span></h1>
          <h4>User Id : <span className='font-bold'> {data.login}</span></h4>
          <h4>City : <span className='font-bold'> {data.location}</span></h4>
          <h4>Public Repository : <span className='font-bold'> {data.public_repos}</span></h4>
          <h4>Follower : <span className='font-bold'> {data.followers}</span></h4>
          <h4>Following : <span className='font-bold'> {data.following}</span></h4>
          <button className='text-white font-bold text-xl bg-orange-700 p-2 rounded-xl mt-2 '><a href={data.html_url}>Click here to go to GitHub</a> </button>
        </div>
      </div>
    </>
  )
}

export default GitHub