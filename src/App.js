import React, { Component } from 'react';
import Navbar from './Components/navbar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/about'
import Projects from './Components/projects';
import Resume from './Components/resume';
import Contacts from './Components/contacts'

class App extends Component {
    render() {
        return (
            <Router basname='/'>
                <div className='App'>
                    <Navbar />
                    <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/resume' component={Resume}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/privacy-policy' component={() => {window.location = 'https://karik-plan.firebaseapp.com/signin'; 
                    return null;
                    }}/>
                    </Switch>

                </div>
            </Router>

        )
    }
}

export default App;
