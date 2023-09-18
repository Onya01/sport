import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)



// import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import Router and Route

// import LoginForm from '../src/components/login/LoginForm'; // Import your LoginPage component

// ReactDOM.render(
//   <Router>
//     <Route path="/login" element={<LoginForm />} />
//     {/* Define other routes here */}
//   </Router>,
//   document.getElementById('root')
// );