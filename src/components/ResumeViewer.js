import React from 'react'
import './ResumeViewer.css'

function ResumeViewer() {
    return (
        <div className='resume-container'>
           <h1> Personal Resume</h1>
           <div className="resume-pic">
               <img src="/Portfolio/images/resume.png" alt=""></img>
           </div>
           <a href="/Portfolio/Images/resume.pdf" download="FannieBarskhiansResume">Download</a>
        </div>
    )
}

export default ResumeViewer;