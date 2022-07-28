import './App.css';
import ClaimForm from './Components/Forms/ClaimForm';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderNavBar from './Components/Menus/HeaderNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FootBar from './Components/Menus/FootBar';

function App() {
  return (
  <Router>
    <div className="App">
      <HeaderNavBar />
      <div className="content">
        <Routes>        
        <Route exact path="home" element={<Home/>} />
          <Route exact path="new-claim/pet" element={<ClaimForm formType="pet"/>} />
          <Route exact path="new-claim/property" element={<ClaimForm formType="property"/>} />
          <Route exact path="new-claim/vehicle" element={<ClaimForm formType="vehicle"/>} />
          <Route exact path="review-claim/" element={<ClaimForm formType="vehicle"/>} />
          <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </div>  
      <FootBar/>
    </div>    
  </Router>
  )
}

export default App;
