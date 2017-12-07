import React from 'react';

function Header(){
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Maulik Trapasiya</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbarSupportedContent" className="collapse navbar-collapse" >

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
};

export default Header;
