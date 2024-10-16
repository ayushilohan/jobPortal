import React from 'react';
import '../style/AddJob.css';

const AddJob = () => {
  return (
    <div className="add-job-container">
      <p className="add-job-title">Add Job</p>
      <label className="job-label">Job Name</label>
      <input className="job-input" />

      <label className="job-label">Description</label>
      <input className="job-input" />

      <label className="job-label">Min Experience</label>
      <input className="job-input" />

      <label className="job-label">Location</label>
      <input className="job-input" />

      <button className="add-job-btn">Add</button>
    </div>
  );
};

export default AddJob;
