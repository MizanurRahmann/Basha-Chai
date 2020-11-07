import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Footer from './components/Footer/Footer';
import Flat from './components/Flat/Flat';
import Navbar from './components/Navigation/Navbar';
import FlatList from './components/FlatList/FlatList';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
            <Navbar />
            {/* <Flat /> */}
            <FlatList />
        </Route>
        
        <Route exact path='/items' component={Main} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/signUp' component={SignUp} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
