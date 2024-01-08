// MedicinesCatalog.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../styles/MedicinesCatalog.css';
import { getToken } from '../components/AuthService';

const MedicinesCatalog = () => {
  const { id } = useParams();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = getToken();
      if (token) {
        try {
          const response = await axios.get(`http://localhost:5000/api/stores/${id}/medicines`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // Set the state with the received data directly
          setMedicines([response.data]);
        } catch (e) {
          console.log('Failed to decode token: ', e);
        }
      } else {
        console.log('Token not received');
      }
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  return (
    <div className="catalog_container">
      <Header />
      <h2>Medicines Catalog</h2>
      <ul>
        {console.log(medicines)}
      {medicines.map((medicine) => (
          <li className='catalog_list' key={medicine.id}>
            <strong>{medicine.name}</strong>
            <p>Price: {medicine.price}</p>
            <button className='catalog_button' info ={medicine.id}>Open medicine review</button>
            <button className='catalog_button' info ={medicine.id}>Update medicine</button>
            <button className='catalog_button' info ={medicine.id} >Delete medicine</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicinesCatalog;
