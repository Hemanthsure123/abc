import { BrowserRouter, Route, Routes } from 'react-router'

import Body from './components/Body/index.js'
import SocialMedia from './components/SocialMedia/index.js'
import MusicApps from './components/MusicApps/index.js'
import OnlineShopping from './components/OnlineShopping/index.js'
import WatchApps from './components/WatchApps/index.js'
import MinorProjects from './components/MinorProjects/index.js'
import NotFound from './components/NotFound/index.js'

import './App.css'

const App = () => ( <
    BrowserRouter >
    <
    Routes >
    <
    Route exact path = "/"
    element = { < Body / > }
    /> <
    Route path = "/socialmedia"
    element = { < SocialMedia / > }
    /> <
    Route path = "/musicapps"
    element = { < MusicApps / > }
    /> <
    Route path = "/onlineshopping"
    element = { < OnlineShopping / > }
    /> <
    Route path = "/watch"
    element = { < WatchApps / > }
    /> <
    Route path = "/minorprojects"
    element = { < MinorProjects / > }
    /> <
    Route path = "*"
    element = { < NotFound / > }
    /> <
    /Routes> <
    /BrowserRouter>
)

export default App