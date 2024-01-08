// CreateDrugstoreModal.js
import React, { useRef } from 'react';
import Modal from 'react-modal';
import '../styles/DrugstoreCatalogModal.css'

const DrugstoreCatalogModal = ({ isOpen, onRequestClose }) => {
    const nameRef = useRef();
    const cityRef = useRef();
    const addressRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const city = cityRef.current.value;
        const address = addressRef.current.value;

        const response = await fetch('http://localhost:5000/api/stores/', {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            city: city,
            address: address
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.json);
        onRequestClose();
        window.location.reload(false);
        //navigate('/guest/registration/confirm-registration');
          
      };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2 className='modal_h2'>Create New Drugstore</h2>
      <form className='modal_form'>
        <label className='modal_label'>
          Name:
          <input className='modal_input' type="text"  ref={nameRef} />
        </label>
        <label className='modal_label'>
          City:
          <input className='modal_input' type="text"  ref={cityRef} />
        </label>
        <label className='modal_label'>
          Address:
          <input className='modal_input' type="text"  ref={addressRef} />
        </label>
        <button className='modal_button' type="button" onClick={handleSubmit}>
          Create
        </button>
        <button className='modal_button' type="button" onClick={onRequestClose}>
          Close
        </button>
      </form>
    </Modal>
  );
};

export default DrugstoreCatalogModal;
