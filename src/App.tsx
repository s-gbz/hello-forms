import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentRegistrationForm from "./components/StudentRegistrationForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentRegistrationForm />
      </header>
    </div>
  );
}

export default App;
