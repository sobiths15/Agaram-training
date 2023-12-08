import React from 'react'
import store from './Store'
import { Provider } from 'react-redux'
import Login from './redux/Login';

function App() {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
}

export default App;
