import './index.css'
import { Link } from 'react-router'
import React from 'react'
import { Component } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import { FaChrome } from 'react-icons/fa'

class WatchApps extends Component {
    render() {
        return ( <
            div className = "social-media-container" >
            <
            Link to = "/" > { ' ' } <
            button className = "back-arrow" > { ' ' } <
            IoMdArrowRoundBack / > { ' ' } <
            /button> < /
            Link > <
            div className = "social-media-projects-display" >
            <
            div className = "social-media-project-1-watch" >
            <
            a href = "https://github.com/Hemanthsure123?tab=repositories"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://hemanthpomodoro.netlify.app"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a> < /
            div > <
            div className = "social-media-project-2-watch" >
            <
            a href = "https://github.com/Hemanthsure123?tab=repositories"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://hemanthstopwa.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a>  < /
            div > <
            /div>  <
            p className = 'user-password-details' > * Enter USERNAME: rahul, PASSWORD: rahul @2021(If in
                case any user details asked) < /p> < /
            div >
        )
    }
}

export default WatchApps