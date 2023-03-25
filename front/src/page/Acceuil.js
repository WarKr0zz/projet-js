import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe le style du carrousel
import Navbar from '../Navbar';
import backgroundImage from '../back-ground.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <img className="background-image" src={backgroundImage} alt="Background" />
        <div className="home-content">
          <h1 className="title">Bienvenue chez Personalized Trends</h1>
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
            <div>
              <img src="https://via.placeholder.com/1200x400" alt="Image 1" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1200x400" alt="Image 2" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1200x400" alt="Image 3" />
            </div>
          </Carousel>
          <button className="discover-button">
            <Link to="/decouvrir">Je découvre</Link>
          </button>
          <p className="description">Découvrez nos produits personnalisés uniques et tendance</p>
          <div className="product-grid">
            <div className="product">
              <img className="product-image" src="https://via.placeholder.com/300x300" alt="Custom T-Shirt" />
              <h3 className="product-title">Vêtements personnalisés</h3>
              <p className="product-description">Créez votre propre t-shirt unique avec notre outil de personnalisation en ligne facile à utiliser.</p>
              <Link className="see-more-link" to="/custom-clothing">Voir plus</Link>
            </div>
            <div className="product">
              <img className="product-image" src="https://via.placeholder.com/300x300" alt="Custom Hat" />
              <h3 className="product-title">Casquettes personnalisées</h3>
              <p className="product-description">Ajoutez votre nom ou votre logo pour créer une casquette personnalisée qui vous ressemble.</p>
              <Link className="see-more-link" to="/custom-hats">Voir plus</Link>
            </div>
            <div className="product">
              <img className="product-image" src="https://via.placeholder.com/300x300" alt="Custom Jewelry" />
              <h3 className="product-title">Bijoux personnalisés</h3>
              <p className="product-description">Créez des bijoux uniques avec des initiales, des dates importantes ou des messages personnalisés.</p>
              <Link className="see-more-link" to="/custom-jewelry">Voir plus</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;