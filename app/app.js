import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import router from './router'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap (material-ui)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render app on page
ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
)
