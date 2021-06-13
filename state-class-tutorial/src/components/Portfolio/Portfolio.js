import React, { Component } from 'react';
import './Portfolio.css'
import profilePic from './profilePic/avatar.png';
import largeProfilePic from './images/large-profile.jpeg';

export default class PortFolio extends Component {

    render() {
        return(
            <div className="portfolio">
                <div className="firstSection">
                    <img className="profileImg" src={profilePic} alt="profile pic"></img>
                    <h1 className="profileName">Siddesh Somashekhar</h1>
                    <p className="profession"><em>Lead engineer @ MetricStream</em></p>
                </div>
                <img className="largeProfilePic" src={largeProfilePic} alt="A invisible person wearing a hat, glasses, and coat."></img>
                <div className="secondSection">
                    <h1>PROFILE SUMMARY</h1>
                    <p className="profileSummary">
                        <p>
                        <em> Full stack developer with hands-on experience on implementing scalable enterprise web applications. 
                        Have extensive knowledge on software design patterns. Worked on both monolith and microservice environments.
                        Skilled in build process management using different build tools from project initiation to deployment. </em>
                        </p>
                        <p>
                        <em>Experience in developing REST services, version management, caching data, error handling  
                            also specialized in authentication and authorization. I am skilled in writing readable and maintainable code. Also well adapted the coding standard &
                                guidelines. </em>
                        </p>
                        <p> You can contact me at: 
                            <a href="mailto:codegeekbnglr@gmail.com">codegeekbnglr@gmail.com</a>
                        </p>
                    </p>
                </div>
                <footer>
                    <h1 className="footerText">All rights reserved</h1>
                </footer>
            </div>
        )
    }
}