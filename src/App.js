// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Define other routes here */}
        </Routes>
      </Router>
      {/* <LoginForm /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
