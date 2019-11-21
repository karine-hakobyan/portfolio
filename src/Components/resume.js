import React, { Component } from 'react';
import KarHak from '../KarHak.jpg';
import Content from './resumeContent'


class Resume extends Component {
    render() {
        return (
            <div className='container section'>
                <div className='card z-depth-2'>
                    <div className='card-content'>
                        <div className='row  grey lighten-2'>
                            <div className="col s2 ">
                                <img src={KarHak} alt='' />
                            </div>
                            <div className="col s10">
                                <h1 className='card-title grey-text'>Karine Hakobyan</h1>
                                <h6>React/Redux developer</h6>
                                <i className='material-icons grey-text left'>email</i>
                                <p>karinehakobyan015@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume