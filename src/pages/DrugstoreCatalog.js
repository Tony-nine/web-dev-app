// DrugstoresCatalog.js
import React, { useState, useEffect } from 'react';
import { getToken } from '../components/AuthService';
import axios from 'axios';
import Header from './Header';
import CreateDrugstoreModal from './DrugstoreCatalogModal';
import UpdateDrugstoreModal from './DrugstoreCatalogModalUpdate';
import '../styles/DrugstoreCatalog.css';
import { useNavigate } from 'react-router-dom';

const DrugstoresCatalog = () => {
  const navigate = useNavigate();
  const [drugstores, setDrugstores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = getToken();
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/stores/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setDrugstores(response.data);
        } catch (e) {
          console.log('Failed to decode token: ', e);
        }
      } else {
        console.log('Token not received');
      }
    } catch (error) {
      console.error('Error fetching drugstores:', error);
    }
  };
  
  const deleteStore = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/stores/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log(`Drugstore with ID ${id} deleted successfully.`);
        // Optionally, you can handle the response or perform additional actions here
      } else {
        console.error(`Failed to delete drugstore with ID ${id}.`);
      }
  
      // Reload the page or update the drugstores list after deletion
      //window.location.reload(false);
      // Or update the drugstores list without reloading the page
       fetchData(); // Assuming you have a function to fetch updated data
    } catch (error) {
      console.error('Error deleting drugstore:', error);
    }
  };

  const openStore = async (id) => {
    navigate(`/drugstores/${id}`);
  }


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUpdateModal = (storeId) => {
    setUpdateId(storeId);
    setisUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setisUpdateModalOpen(false);
  };

  return (
    <div className="catalog_container">
      <Header />
      <h2>Drugstores Page</h2>
      <ul>
      {console.log(drugstores)}
        {drugstores.map((drugstore) => (
          <li className='catalog_list' key={drugstore.id}>
            <strong>{drugstore.name}</strong>
            <p>City: {drugstore.city}</p>
            <p>Address: {drugstore.address}</p>
            <button className='catalog_button' info ={drugstore.id} onClick={() => openStore(drugstore.id)}>Open drugstore catalog</button>
            <button className='catalog_button' info ={drugstore.id} onClick={() => openUpdateModal(drugstore.id)}>Update drugstore</button>
            <button className='catalog_button' info ={drugstore.id} onClick={() => deleteStore(drugstore.id)}>Delete drugstore</button>
          </li>
        ))}
      </ul>
      <button className='catalog_button' onClick={openModal}>Create New</button>
      <CreateDrugstoreModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <UpdateDrugstoreModal isOpen={isUpdateModalOpen} onRequestClose={closeUpdateModal}  updateId={updateId}/>
    </div>
  );
};

export default DrugstoresCatalog;
