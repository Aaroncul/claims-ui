import './App.css';
import ClaimForm from './Components/Forms/ClaimForm';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderNavBar from './Components/Menus/HeaderNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <Router>
    <div className="App">
      <HeaderNavBar />
      
      <div className="content">
        <Routes>        
          <Route exact path="new-claim/pet" element={<ClaimForm formType="pet"/>} />
          <Route exact path="new-claim/property" element={<ClaimForm formType="property"/>} />
          <Route exact path="new-claim/vehicle" element={<ClaimForm formType="vehicle"/>} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App;
