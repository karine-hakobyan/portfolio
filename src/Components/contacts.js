import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Contacts extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            subject: 'Request for hiring',
            message: '',
            errors: {
                name: '',
                email: '',
                message: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
        

    }

    handleChange(e) {
        // console.log(this.state)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    validateEmail() {
        let errors = {}
        let formIsValid = true

        if (!this.state.name || this.state.name.length < 3) {
            errors.name = 'Minimum 3 symbols'
            formIsValid = false
        }

        if (!this.state.email || this.state.email.length < 3) {
            errors.email = 'Minimum 3 symbols'
            formIsValid = false
        }
        if (!this.state.message || this.state.message.length < 10) {
            errors.message = 'Minimum 10 symbols'
            formIsValid = false
        }

        let pattern =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        //  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!pattern.test(String(this.state.email).toLocaleLowerCase())) {
            errors.email = 'This is not a valid email'
            formIsValid = false
        }

        this.setState({
            errors: errors
        })
        return formIsValid
    }

    sendEmail(e) {
        // console.log("level 1")
        e.preventDefault()
        if(!this.validateEmail()){
            return
        }

        var templateParams = {
            reply_to: this.state.email,
            from_name: this.state.name + '(' + this.state.email + ')',
            subject: this.state.subject,
            to_name: 'Karine',
            message_html: this.state.message,
        }
        // console.log("template Param===")
        // console.log(templateParams)

        emailjs.send('gmail', 'template_y7fpxs1f', templateParams, 'user_sZRU55ALZMbOVyDsrFVfX')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (err) {
                console.log('FAILED...', err);
            });

        this.setState({
            name: '',
            email: '',
            subject: 'Request for hiring',
            message: '',
        })
    }
    render() {
        return (
            <div className='container section'>
                <h2 className='grey-text text-darken-4 center-align'>Get In Touch</h2>
                <div className='row'>
                    <div className='input-field col s3 offset-s2'>
                        <i className='material-icons prefix'>person</i>
                        <input className='inline' type='text' id='name' onChange={this.handleChange} />
                        <label for='name'>Name</label>
                        <span className='error red-text center'>{this.state.errors.name}</span>
                    </div>
                    <div className='input-field col s4 offset-s1'>
                        <i className='material-icons prefix'>email</i>
                        <input type='email' id='email' onChange={this.handleChange} />
                        <label htmlFor='email'>Email</label>
                        <span className='error red-text center'>{this.state.errors.email}</span>
                    </div>
                    <div className='input-field col s6 offset-s3'>
                        <i className='material-icons prefix'>message</i>
                        <textarea id='message' className='materialize-textarea' onChange={this.handleChange}></textarea>
                        <label for='message'>Your message</label>
                        <span className='error red-text center'>{this.state.errors.message}</span>
                    </div>
                </div>

                <div className='center-align'>
                    <button onClick={this.sendEmail} className='btn waves-effect waves-light' type='submit'>Send it</button>
                </div>
            </div>
        )
    }
}

export default Contacts