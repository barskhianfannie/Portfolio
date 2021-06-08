import React from 'react'
import './ResumeViewer.css'

function ResumeViewer() {
    return (
        <div className='resume-container'>
            <a href="/Portfolio/Images/resume.pdf" download="FannieBarskhiansResume">Download</a>
           <div className="resume-pic">
               <img src="/Portfolio/images/resume.png" alt=""></img>
           </div>
           
        </div>
    )
}

export default ResumeViewer;