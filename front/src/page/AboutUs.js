import React from "react";
import Navbar from "../Navbar";
import backgroundImage from "../back-ground.jpg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <img
          className="background-image"
          src={backgroundImage}
          alt="About us background"
        />
        <div className="about-content">
          <h1 className="title">Qui sommes-nous ?</h1>
          <p className="description">
            Personalized Trends est une entreprise de personnalisation de
            produits en ligne. Nous sommes spécialisés dans la personnalisation
            de vêtements, de casquettes et de bijoux pour que nos clients
            puissent exprimer leur style unique. Nous utilisons les dernières
            technologies pour offrir une expérience de personnalisation facile
            et rapide, et nous travaillons sans relâche pour offrir des produits
            de qualité supérieure à nos clients.
          </p>
          <h2 className="subtitle">Notre mission</h2>
          <p className="mission">
            Notre mission est de permettre à chacun de s'exprimer avec style
            grâce à nos produits personnalisés uniques. Nous croyons que chaque
            personne est unique et mérite de porter des produits qui le
            reflètent. C'est pourquoi nous travaillons sans relâche pour offrir
            des produits de qualité supérieure à nos clients.
          </p>
          <h2 className="subtitle">Notre équipe</h2>
          <p className="team">
            Notre équipe est composée de passionnés de la mode, du design et de
            la technologie. Nous travaillons ensemble pour offrir une expérience
            de personnalisation de produits facile et rapide, tout en
            garantissant la qualité de nos produits. Nous sommes déterminés à
            faire de Personalized Trends la meilleure entreprise de
            personnalisation de produits en ligne.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
