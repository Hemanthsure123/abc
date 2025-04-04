import './index.css'
import { Component } from 'react'
import { Link } from 'react-router'
class NotFound extends Component {
    render() {
        return ( <
            div className = "not-found-container" >
            <
            img src = "https://res.cloudinary.com/do2qll3mj/image/upload/v1743748034/5203299_guo0ri.jpg"
            alt = "not-found"
            className = 'not-found-image' / >
            <
            h1 className = 'not-found-heading' > Not Found! < /h1> <
            Link className = "not-found-link"
            to = "/" >
            <
            button className = 'not-found-button' > Back to Home < /button> <
            /Link> <
            /div>
        )
    }
}

export default NotFound