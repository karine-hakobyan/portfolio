import React from 'react';

const Content = () => {
  return (

    <div className='center'>

      <div >
        <h5>Skills</h5>
        <div className='divider'></div>
        <li>React/Redux</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Firebase</li>
        <li>Bash Shell Scripting</li>
        <li>Git</li>

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

        <div >
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