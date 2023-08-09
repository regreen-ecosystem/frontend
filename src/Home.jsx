import React from 'react';
import { Link } from 'react-router-dom';
import Header from './containers/header';
import Footer from './containers/footer';

function Home(){
    const text1="# New PIBO's to review";
    const text2="# requests are pending";
    return <div>
        <Header/>
        <div className='search'>
            <h2 style={{margin:0}}>Search by name</h2>
            <Link to="/create-new-member" style={{textDecoration: "none"}}><button className='btn'>Create a new member +</button></Link>
            </div>
            <input type="text" placeholder='Add your name here'/>
        <div className='notifs'>
            <div style={{backgroundColor:'#A9BA9D'}}>{text1}</div>
            <div style={{backgroundColor:'#87A96B'}}>{text2}</div>
            <div style={{backgroundColor:'#4B6F44'}}>---</div>
        </div>
        <div className='data' style={{backgroundColor:'#A9BA9D'}}>Data</div>
        <Footer/>
    </div>
}

export default Home;