import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SideNav, { MenuIcon } from 'react-simple-sidenav';


class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });


    render() {
        return (
            <div>
                <nav className='nav-wrapper green darken-4'>
                    <div className='container'>

                        {/* <a href='' className='sidenav-trigger' data-target='mobile-links'>
                            <i className='material-icons'>menu</i>
                        </a>  */}
                        <MenuIcon onClick={() => this.setState({ showNav: true })} className='hide-on-large-only' />
                        <SideNav
                            showNav={this.state.showNav}
                            onHideNav={() => this.setState({ showNav: false })}
                            title="Hello World"
                            items={['home', 'services', 'about', 'contact']}
                            titleStyle={{ backgroundColor: '#4CAF50' }}
                            itemStyle={{ backgroundColor: '#fff' }}
                            itemHoverStyle={{ backgroundColor: '#CDDC39' }}
                        />


                        <ul className='right hide-on-med-and-down'>
                            <li className='waves-effect'><NavLink to='/'>About</NavLink> </li>
                            <li className='waves-effect'><NavLink to='/projects'>Projects</NavLink> </li>
                            <li className='waves-effect'><NavLink to='/resume'>Resume</NavLink> </li>
                            <li className='waves-effect'><NavLink to='/contacts'>Contacts</NavLink> </li>
                        </ul>
                    </div>
                </nav>


                {/* <ul className='sidenav' id='mobile-links'>
                    <li className='waves-effect'><Link to='/'>About</Link> </li>
                    <li className='waves-effect'><Link to='/projects'>Projects</Link> </li>
                    <li className='waves-effect'><Link to='/resume'>Resume</Link> </li>
                    <li className='waves-effect'><Link to='/contacts'>Contacts</Link> </li>
                </ul> */}



            </div>
        )
    }
}

export default Navbar