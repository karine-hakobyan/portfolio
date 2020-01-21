import React, { Component } from 'react';
import KarHak from '../KarHak.jpg';
import { Link } from 'react-router-dom'

class About extends Component {

    handleClick = this.handleSubmit.bind(this)
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/contacts')
    }
    render() {
        return (
            <div>
                <div className='row  grey lighten-2 section'>
                    <div className="col s1 offset-s3">
                        <img src={KarHak} alt='' />
                    </div>
                    <div className=" card-title col s7 offset-s1">
                        <p>Hello, my name is</p>
                        <h5 className='grey-text'>Karine Hakobyan</h5>
                        <span>I am self-educated entry-level React.js developer.
                                Check out my <Link to='/projects'>projects</Link> and <Link to='/resume'>resume.</Link></span>
                    </div>
                    <div  className='col s1 offset-s1'>
                        <button style= {{top: '20px'}} onClick={this.handleClick} className='btn waves-effect waves-light' type='submit'>Hire me</button>
                    </div>
                </div>
                <div className='container center'>
                    <h3>Skills Overview</h3>
                    <p>I have about 1 year experience in programming. Below is a quick overview of my main technical skill.</p>
                </div>
                <div className='row' >
                    <div class="col s4 offset-s4">
                        <div class="card white darken-1 center">
                            <div class="card-content">
                                <i className='material-icons prefix'>frontend</i>
                                <span class="card-title">Frontend</span>
                                <li>React(including hooks and contexts)/Redux</li>
                                <li>HTML/CSS</li>
                                <li>Git</li>
                                <li>Firebase</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About