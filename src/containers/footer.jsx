import React from 'react';

const year=new Date().getFullYear();

function Footer(){
    return <footer>
        <p>Copyright ©️ {year} | Recycling</p>
    </footer>
}

export default Footer;