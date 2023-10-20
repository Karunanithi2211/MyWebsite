import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import api from './api/axiosConfig'
import { useEffect, useState } from 'react';
import Detail from './Home/Detail/Detail';
import Profile from './Home/Profile/Profile';
import Buy from './Home/Buy/Buy';


function App() {

  const [details, setDetails] = useState();

  const getDetails = async() => {
    try{
      const response = await api.get("/api/v1/website");
      setDetails(response.data)
      const userId = document.cookie.split("; ")
      .find(row => row.startsWith('userId='))
      .split("=")[1];
      const setPersistentCookie = (name, value) => {
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
      };
      setPersistentCookie('userId', userId);
      console.log("User Id: "+userId)
      if (userId=="undefined") {
        window.location.href='http://localhost:8080/?lif';
      }
    }
    catch(err){
      console.log(err)
      window.location.href='http://localhost:8080/?lif';
    }
  }

  useEffect(() => {
    getDetails();
    console.log(details)
  },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home details={details}/>} />
          <Route path="/detail/:productid" element={<Detail/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/detail/buy/:productid' element={<Buy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
