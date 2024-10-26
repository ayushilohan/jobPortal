import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AddJob from './components/AddJob';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/add-job" element={<AddJob addJob={addJob} />} />
        <Route path="/add-job/job/:id" element={<AddJob />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
