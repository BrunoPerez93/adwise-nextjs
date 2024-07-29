'use client';

import "../../styles/Contacto.css";
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    InputName: '',
    InputEmail: '',
    InputMessage: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      if (res.ok && result.success) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
      setStatus('Failed to send message.');
    }
  };
  

  return (
    <div className="container">
      <form method="post" className="mb-5" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label htmlFor="InputName" className="text-form">
            Nombre <label className="text-red-600">*</label>
          </label>
          <input
            type="text"
            className="input-adwise"
            id="InputName"
            name="InputName"
            maxLength="50"
            value={formData.InputName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="InputEmail" className="text-form">
            Email <label className="text-red-600">*</label>
          </label>
          <input
            type="email"
            className="input-adwise"
            id="InputEmail"
            name="InputEmail"
            aria-describedby="emailHelp"
            maxLength="254"
            value={formData.InputEmail}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="InputMessage" className="text-form">
            Mensaje <label className="text-red-600">*</label>
          </label>
          <textarea
            className="input-adwise"
            id="InputMessage"
            name="InputMessage"
            maxLength="1000"
            value={formData.InputMessage}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="button-adwise">
          Contactenos ⭢
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Form;
