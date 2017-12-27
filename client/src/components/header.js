import React from 'react';

class Header extends React.Component{
    state = {
        navCollapsed: true
    };

    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    };
    render(){
        const {navCollapsed} = this.state;
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Maulik Trapasiya</a>
                <button className="navbar-toggler" onClick={this._onToggleNav} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbarSupportedContent" className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} >

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactme">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

};

export default Header;
