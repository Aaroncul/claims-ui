import './App.css';
import ClaimForm from './Components/Forms/ClaimForm';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderNavBar from './Components/Menus/HeaderNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Login from './userManagement/login';
import myStore from './store/store';
import ProtectedRoute from './userManagement/ProtectedRoute';

import { Provider } from 'react-redux';
import FindAClaim from './Components/FindAClaim';
import ViewClaim from './Components/ViewAClaim';

function App() {
  return (
    <Provider store={myStore}>
      <Router>
        <div className="App">
          <HeaderNavBar />

          <div className="content">
            <Routes>
            <Route exact path="" element={<Home />} />
              <Route exact path="home" element={<Home />} />
              <Route exact path="login" element={<Login />} />

              <Route path="/find" element = {
            <ProtectedRoute component={<FindAClaim />} roles={["CUSTOMER", "STAFF"]} />
          } />
            <Route path="/find/:id" element = {<ProtectedRoute component={<FindAClaim />} roles={["CUSTOMER", "STAFF"]} />} />
            <Route path="/view/:id" element = {<ProtectedRoute component={<ViewClaim />} roles={["CUSTOMER", "STAFF"]} />} />
            <Route path="/find" element = {<ProtectedRoute component={<FindAClaim />} roles={["CUSTOMER", "STAFF"]} />} />

              <Route path="new-claim/pet" element=
                {<ProtectedRoute component={<ClaimForm formType="pet" />} roles={["CUSTOMER"]} />} />
              <Route path="new-claim/property" element=
                {<ProtectedRoute component={<ClaimForm formType="property" />} roles={["CUSTOMER"]} />} />
              <Route path="new-claim/vehicle" element=
                {<ProtectedRoute component={<ClaimForm formType="vehicle" />} roles={["CUSTOMER"]} />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
