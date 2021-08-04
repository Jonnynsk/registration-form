import { Route, Switch } from 'react-router'

import Header from './components/Header/Header'
import Registration from './components/Registration/Registration'
import Confirmation from './components/Confirmation/Confirmation'
import Success from './components/Success/Success'

import './App.css'

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Switch>
          <Route path='/' exact><Registration /></Route>
          <Route path='/confirmation'><Confirmation /></Route>
          <Route path='/success'><Success /></Route>
        </Switch>
      </div>

    </div>
  )
}

export default App
