import React from "react"
import MainPage from '../pages'
import { Switch, Route } from 'react-router-dom'


const Pages = () => {

  return (
    <Switch>

      <Route exact path='/'>
        <MainPage />
      </Route>

    </Switch>
  )
}

export default Pages

