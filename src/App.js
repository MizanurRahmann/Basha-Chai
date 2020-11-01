import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Footer from './components/Footer/Footer';
import Flat from './components/Flat/Flat';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Flat} />
        <Route exact path='/items' component={Main} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/signUp' component={SignUp} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
