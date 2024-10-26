import React, {useState, useEffect} from 'react';
import '../style/AddJob.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddJob = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

const [formData, setFormData] = useState({
  jobTitle: '',
  description: '',
  location: '',
  experience: ''
});

useEffect(() => {
  if (id) {
    axios.get(`http://localhost:8080/job/job/${id}`)
      .then(response => {
        setFormData({
          jobTitle: response.data.jobTitle,
          description: response.data.description,
          location: response.data.location,
          experience: response.data.experience
        });
      })
      .catch(error => console.log('Error fetching job data:', error));
  }
}, [id]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
};

const submitHandler = async(e) => {
  e.preventDefault();
    
  try {
    if (id) {
      await axios.put(`http://localhost:8080/job/update/${id}`, formData);
    } else {
      await axios.post('http://localhost:8080/job/save', formData);
    }
    navigate('/');
  } catch (error) {
    console.error('Error submitting data:', error);
  }
}
  return (
    <div className="add-job-container">
      <p className="add-job-title">{id ? 'Edit Job' : 'Add Job'}</p>

      <label className="job-label">Job Title</label>
      <input 
      name='jobTitle'
      value={formData.jobTitle} 
      onChange={handleChange} 
      className="job-input" />

      <label className="job-label">Description</label>
      <input 
      name='description'
      value={formData.description} 
      onChange={handleChange} 
      className="job-input" />

      <label className="job-label">Location</label>
      <input 
      name='location'
      value={formData.location} 
      onChange={handleChange} 
      className="job-input" />

      <label className="job-label">Min Experience</label>
      <input 
      name='experience'
      type='number' 
      value={formData.experience} 
      onChange={handleChange} 
      className="job-input" />

      <button type='submit' onClick={submitHandler} className="add-job-btn">
      {id ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default AddJob;
