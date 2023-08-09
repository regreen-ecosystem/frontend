import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const Pibo="PIBO's";
    const pwp="PWP's";
    const matched="Matched";
    const pending="Pending";
    const certif="Certificates";
    const [Mobile,setMobile]=useState(false);
    return <header>
        <div className="header">
            <Link to="/" style={{textDecoration: "none"}}><img className="logo" src="logo.png" alt="logo"/></Link>
            <div className={Mobile? "dropdown":"header-links"} onClick= {() => setMobile(false)}>
                <Link to="/pibo" className='links' style={{textDecoration: "none"}}><span>{Pibo}</span></Link>
                <Link to="/pwp" className='links' style={{textDecoration: "none"}}><span>{pwp}</span></Link>
                <Link to="/matched" className='links' style={{textDecoration: "none"}}><span>{matched}</span></Link>
                <Link to="/pending" className='links' style={{textDecoration: "none"}}><span>{pending}</span></Link>
                <Link to="/certificates" className='links' style={{textDecoration: "none"}}><span>{certif}</span></Link>
            </div>
            <div className="options">
                <div className='img-container'><img className='person' src='person.jpeg' alt='person'/>Anonymous User</div>
                <div><i className="fa fa-gear"></i></div>
                <div><i className="fa fa-bell"></i></div>
            </div>
            <button className="dropbtn" onClick={()=>setMobile(!Mobile)}>{Mobile?(<i className='fa fa-times'></i>):(<i className='fa fa-bars'></i>)}</button>
        </div>
    </header>
}

export default Header;