import React from 'react';

const Content = () => {
  return (
    <div className='row'>
      <div className='col s6'>
        <h5>Work Experience</h5>
        <div className='divider'></div><br/>
        <span> It is about a year I have started studying programming.
             I learned React.js, Redux.js, Firebase. I am familiar with HTML, CSS, JS, Node.js, Express.js and Bash Shell Scripting.
             I have no work experience yet.
        </span>
      </div>
      <div className='col s3 offset-s3'>
          <h5>Skills</h5>
          <div className='divider'></div>
          <li>React/Redux</li>
          <li>HTML/CSS</li>
          <li>Firebase</li>
          <li>Node.js/Express</li>
          <li>Bash Shell Scripting</li>
        <div>
          <h5>Education</h5>
          <div className='divider'></div>
          <li><b>MSc in Art History</b></li>
          <p>Yerevan State University</p>
          <p>2013-2015</p>
          <li><b>BSc in Art History</b></li>
          <p>Yerevan State University</p>
          <p>2009-2013</p>
        </div >
        <div>
          <h5>Language</h5>
          <div className='divider'></div>
          <li><b>Armenian</b> (native)</li>
          <li><b>Russian</b> (good)</li>
          <li><b>English</b> (good)</li>
          <li><b>Italian</b> (elementary)</li>
        </div>
        <div>
          <h5>Interests</h5>
          <div className='divider'></div>
          <li>Music</li>
          <li>National dance</li>
          <li>Cooking</li>
        </div>
      </div>
    </div>
  )
}

export default Content