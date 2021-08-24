import React from 'react'
import './ResumeViewer.css'

function ResumeViewer() {
    return (
        <div className='resume-container'>
            <h1 id="Resume">Resume</h1>
            <a href="/Portfolio/Images/resume.pdf" download="FannieBarskhiansResume">Download</a>
           <div className="resume-pic">
               <img src="/Portfolio/Images/resume.png" alt=""></img>
           </div>
           
        </div>
    )
    }
export default ResumeViewer;