import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className='container-fluid'>
                <a className="navbar-brand" href="/">
                    Navbar <span>Boxes Count: {props.boxesCount}</span>
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;