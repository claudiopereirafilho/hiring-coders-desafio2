import React from 'react';

function Navbar(){
    return(

    <nav className="navbar has-background-grey-dark" aria-label="main navigation">
        <div className="navbar-brand">
            <div className="navbar-item has-text-white"> 
                <p>Inventory System</p>
            </div>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        
        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <a className="button">
                <strong>Olá, visitante!</strong>
            </a>
            </div>
        </div>
        </div>                
    </nav>    
         
    );
}

export default Navbar;

