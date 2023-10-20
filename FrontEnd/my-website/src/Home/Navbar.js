import { faCopy, faCopyright, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Navbar = () => {
    const logout=() =>{
        const removeCookie = (name) => {
            const expirationDate = new Date(0);
            document.cookie = `${name}=; expires=${expirationDate.toUTCString()}; path=/`;
        };
        removeCookie('userId');
        window.location.href='http://localhost:8080/?logout';
    }
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container">
                <div className="navbar-brand">MyWebsite</div>
                <ul className="navbar-nav ml-auto">
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="/profile" className="nav-link">Profile</a></li>
                    <li><a href="#" className="nav-link" onClick={logout}>Logout</a></li>
                </ul>
            </div>
        </nav>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom'>
            <div className="container text-center">
                <h6><FontAwesomeIcon icon={faCopyright}/> Copyrights</h6>
                <h6 style={{marginLeft:'200px'}}><FontAwesomeIcon icon={faPhone}/> Contact: <a href='https://api.whatsapp.com/send?phone=8825685300' style={{textDecoration:'none', color:'white'}}>+91 8825685300</a></h6>
                <h6 style={{position:'relative',right: '-50px'}}><FontAwesomeIcon icon={faMailBulk}/> Email: <a href='mailto:kavinmano2211@gmail.com' style={{textDecoration:'none', color:'white'}}>kavinmano2211@gmail.com</a></h6>
            </div>
        </nav>
    </div>
  )
}

export default Navbar