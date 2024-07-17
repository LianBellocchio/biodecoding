import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if (result.success) {
      alert('Inscripción exitosa');
    } else {
      alert('Error en la inscripción');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Inscribirse</button>
    </form>
  );
};

export default SignupForm;
