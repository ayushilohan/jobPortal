import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';
import AllJobs from './AllJobs';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="job-container">
        <p>Click here to add jobs</p>
        <button className="add-job-btn" onClick={() => navigate('/add-job')}>Add Jobs</button>
      </div>

      <div className="search-container">
        <input className="search-input" placeholder='Skill, Designation, Location'/>
        <button className="search-btn">Search</button>
      </div>

      <div className="list-container">
        <AllJobs />
      </div>
    </>
  );
};

export default Home;
