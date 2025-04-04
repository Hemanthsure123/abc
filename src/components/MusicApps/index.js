import './index.css'
import { Link } from 'react-router'
import React from 'react'
import { Component } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import { FaChrome } from 'react-icons/fa'

class MusicApps extends Component {
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
            div className = "social-media-project-2-game" >
            <
            a href = "//"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://surequizgame.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a>  < /
            div > <
            div className = "social-media-project-1-game" >
            <
            a href = "//"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://matchgameheman.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a>  < /
            div > <
            div className = "social-media-project-3-game" >
            <
            a href = "/"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://emojigameheman.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a>  < /
            div > <
            div className = "social-media-project-4-game" >
            <
            a href = "//"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://hemanthHoliGame.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a>  < /
            div > <
            div className = "social-media-project-5-game" >
            <
            a href = "//"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://rpsgameheman.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a>  < /
            div > <
            div className = "social-media-project-6-game" >
            <
            a href = "//"
            className = "go-link" >
            <
            FaGithub className = "view-icon" / > { ' ' } <
            /a> <
            a href = "https://tossgameheman.ccbp.tech"
            className = "go-link" >
            <
            FaChrome className = "view-icon" / > { ' ' } <
            /a> < /
            div > <
            /div>  <
            p className = 'user-password-details' > * Enter USERNAME: rahul, PASSWORD: rahul @2021(If in
                case any user details asked) < /p> <
            /
            div >
        )
    }
}

export default MusicApps