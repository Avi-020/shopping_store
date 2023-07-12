import axios from 'axios';
import React, { useState } from 'react';

function CreateAccount() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: formData.number,
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long,
        },
      },
      phone: formData.phone,
    };

    axios
      .post('https://fakestoreapi.com/users', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset form fields
    setFormData({
      email: '',
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      city: '',
      street: '',
      number: '',
      zipcode: '',
      lat: '',
      long: '',
      phone: '',
    });
        
  };
  return (
   <>
   
   <form onSubmit={handleSubmit} style={styles.form}>
      <label>Email:</label>
      <input type="text" name="email" value={formData.email} onChange={handleChange} style={styles.input} />

      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} style={styles.input} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input} />

      <label>First Name:</label>
      <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} style={styles.input} />

      <label>Last Name:</label>
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} style={styles.input} />

      <label>City:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} style={styles.input} />

      <label>Street:</label>
      <input type="text" name="street" value={formData.street} onChange={handleChange} style={styles.input} />

      <label>Number:</label>
      <input type="text" name="number" value={formData.number} onChange={handleChange} style={styles.input} />

      <label>Zip Code:</label>
      <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} style={styles.input} />

      <label>Latitude:</label>
      <input type="text" name="lat" value={formData.lat} onChange={handleChange} style={styles.input} />

      <label>Longitude:</label>
      <input type="text" name="long" value={formData.long} onChange={handleChange} style={styles.input} />

      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />

      <button type="submit" style={styles.button}>Submit</button>
    </form>
   
   </>
  )
};
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CreateAccount
