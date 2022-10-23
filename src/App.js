import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  onToggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          onToggleTheme: this.onToggleTheme,
        }}
      >
        <Route exact path="/login" component={Login} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
