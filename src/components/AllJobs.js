import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/AllJobs.css';
import { useNavigate } from 'react-router-dom';

const AllJobs = () => {
    const navigate = useNavigate();
    const [jobPost, setJobPost] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/job/jobs');
          setJobPost(response.data);
        } catch (error) {
          console.log('Error fetching data');
        }
      };

    useEffect(() => {
        fetchData();
      }, []);

      const editHandler = (id) => navigate(`/add-job/job/${id}`)

      const deleteHandler = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/job/delete/${id}`);
        fetchData();
        } catch (error) {
          console.error('Error deleting job:', error);
        }
      };

  return (
    <div className='all-jobs'>
            {jobPost.map((item)=>{
                return (
                    <div className='job-item'>
                        <h2>{item.jobTitle}</h2>
                        <p>{item.description}</p>
                        <p>{item.location}</p>
                        <p>{item.experience}</p>
                        <button onClick={()=>editHandler(item.id)}>Edit</button>
                        <button onClick={()=>deleteHandler(item.id)}>Delete</button>
                    </div>
                )
            })}
    </div>
  )
}

export default AllJobs