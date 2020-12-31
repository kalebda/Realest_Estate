import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Listings from './containers/Listings'
import SignUp from './containers/SignUp'
import listingDetail from './containers/ListingDetail'
import Login from './containers/Login'
import NotFound from './components/NotFound'
import Layout from './hoc/Layout'
import store from './store'
import PrivateRoute from './components/privateRoute'
import {Provider} from 'react-redux'
import './sass/main.scss'

const App=()=>(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          
          <Route exact path='/' component ={Home}/>
          <Route exact path='/about' component ={About}/>
          <Route exact path='/contact' component ={Contact}/>
          <Route exact path='/listings' component ={Listings}/>
          <PrivateRoute exact path='/listings/:id' component ={listingDetail}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/signup' component ={SignUp}/>
          <Route exact path = "/foo" render = {()=>{
              return <h3>work</h3>
          }}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </Router>
  </Provider>
  );


export default App;
