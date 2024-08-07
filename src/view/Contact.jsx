import React from 'react';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div>
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea id="description" name="description" rows="4" style={{ width: '100%', padding: '8px', margin: '10px 0' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none' }}>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
