import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Bienvenidos al curso de Biodecodificación</h1>
          <p>Aprende a sanar tu cuerpo y mente a través de la biodecodificación.</p>
          <button><a href="/signup">Inscríbete Ahora</a></button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Sobre el Curso</h2>
          <p>Este curso te ayudará a entender la conexión entre tus emociones y tu salud física.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2>Sobre la Maestra</h2>
          <p>Nuestra maestra es experta en biodecodificación con años de experiencia ayudando a personas a mejorar su salud.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
