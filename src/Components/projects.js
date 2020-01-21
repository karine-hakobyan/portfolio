import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Projects extends Component {
    render() {
        return (
            <div className='container section'>
                <div className='row'>
                    <div className='col s6'>
                        <a href='https://karine-hakobyan.github.io/beer-store/#/' target='_blank' rel="noopener noreferrer" >
                            <h5><li>Beer store</li></h5>
                        </a>
                        <a href='https://github.com/karine-hakobyan/beer-store' target='_blank' rel="noopener noreferrer" >
                            <p>(Github source)</p>
                        </a>
                        <p>(This is a web app, where you can find information about different kind ob beers and add them to your cart.
                            The project is done with react hooks and contexts and local storage is used for storing shopping cart data). </p>
                    </div>
                    <div className='col s6'>
                        <Link to='/privacy-policy' target='_blank'>
                            <h5><li>Create Project</li></h5>
                        </Link>
                        <a href='https://github.com/karine-hakobyan/experiment-createProject' target='_blank' rel="noopener noreferrer" >
                            <p>(Github source)</p>
                        </a>
                        <p>(This is an experimental application using React, Redux and Firebase.
                            It has authentication, so first we need to sign up. Then, we could add a new project,
                            see the details of that project. If we are logged out we can no longer see those projects until we logged in again.
                            Data is stored in Cloude Firestore. Real-time notifications are created using Cloud functions).</p>

                    </div>
                    <div className='col s6'>
                        <a href='https://karine-hakobyan.github.io/snake-game/' target='_blank' rel="noopener noreferrer" >
                            <h5><li>Snake game</li></h5>
                        </a>
                        <a href='https://github.com/karine-hakobyan/snake-game' target='_blank' rel="noopener noreferrer" >
                            <p>(Github source)</p>
                        </a>
                        <p>(This is react.js implementation of the snake game). </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects