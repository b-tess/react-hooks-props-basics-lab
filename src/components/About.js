import React from 'react'
import Links from './Links'

function About(props) {
    function showBio() {
        if (props.bio) {
            return <p>{props.bio}</p>
        } else {
            return null
        }
    }
    return (
        <div id='about'>
            <h2>About Me</h2>
            {showBio()}
            <img
                src='https://i.imgur.com/mV8PQxj.gif'
                alt='I made this'
            />
            {/* add your <Links /> component here */}
            <Links
                github={props.github}
                linkedin={props.linkedin}
            />
        </div>
    )
}

export default About
