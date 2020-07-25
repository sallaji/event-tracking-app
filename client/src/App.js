import React from 'react'
import {Router, Route} from 'react-router-dom'
import history from './history'
import UserProvider from './contexts/UserProvider'
import MenuBar from "./components/menus/MenuBar";
import Home from "./pages/Home"
import Events from "./pages/Events"

const App = () => <Router history={history}>
  <UserProvider>
    <Route path="/" component={MenuBar}/>
    <Route path="/events" component={Events}/>
  </UserProvider>
  <Route path="/" exact component={Home}>
  </Route>
</Router>;

export default App