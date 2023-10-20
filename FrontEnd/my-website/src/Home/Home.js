import Navbar from './Navbar'
import Content from './Content'
import React from 'react'

const Home = ({details}) => {
  return (
    <div>
        <Navbar/>
        <Content details={details}/>
        {/* <img src={api.defaults.baseURL + detail.imageurl} alt={detail.name}/> */}
    </div>
  )
}

export default Home