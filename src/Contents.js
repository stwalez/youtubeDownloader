import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Site from './components/Site'

const Content = (siteProps) => {
  const initialProps = {
      formControlId :'formYoutubeID',
      sitename : 'Youtube',
      sitelinkname : 'ylink'
  }  
  return (
    <Switch>
        <Route exact path="/" render={() => <Site {...siteProps} {...initialProps}/>} />
        <Route path="/Site" render={(props) => <Site {...siteProps} {...props} /> } />
    </Switch>
  )
}

export default Content
