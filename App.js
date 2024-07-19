// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Success from './Success';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    );
};

export default App;