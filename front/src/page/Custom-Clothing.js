import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import "../css/CustomClothing.css";

import redShirt1 from '../rouge.png';
import redShirt2 from '../red-shirt2.jpg';
import redShirt3 from '../red-shirt3.jpg';

import greenShirt1 from '../vert.png';
import greenShirt2 from '../green-shirt2.png';
import greenShirt3 from '../green-shirt3.jpg';

import blueShirt1 from '../bleu.png';
import blueShirt2 from '../blue-shirt2.jpg';
import blueShirt3 from '../blue-shirt3.jpg';

const CustomClothing = () => {
  const colors = [
    {
      name: 'Rouge',
      code: '#FF0000',
      images: [redShirt1, redShirt2, redShirt3],
    },
    {
      name: 'Vert',
      code: '#008000',
      images: [greenShirt1, greenShirt2, greenShirt3],
    },
    {
      name: 'Bleu',
      code: '#0000FF',
      images: [blueShirt1, blueShirt2, blueShirt3],
    },
    // Ajoutez plus de couleurs et d'images ici si nécessaire
  ];

  const [selectedColor, setSelectedColor] = useState('#008000');
  const [selectedImage, setSelectedImage] = useState(0);

  const handleColorChange = (colorCode) => {
    setSelectedColor(colorCode);
    setSelectedImage(0);
  };

  return (
    <div>
      <Navbar />
      <div className="custom-clothing-container">
        <h1 className="title">Personnalisez votre vêtement</h1>
        <h2>Choisissez une couleur</h2>
        <div className="custom-clothing-content">
          <img
            className="product-imagee"
            src={
              colors.find((color) => color.code === selectedColor)?.images[selectedImage] ||
              ''
            }
            alt={`Vêtement personnalisé - Couleur ${selectedColor}`}
          />
          <div className="color-picker">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-swatch"
                style={{ backgroundColor: color.code }}
                onClick={() => handleColorChange(color.code)}
              ></div>
            ))}
          </div>
        </div>
        <div className="image-gallery">
          {colors
            .find((color) => color.code === selectedColor)
            ?.images.map((image, index) => (
              <img
                key={index}
                className="thumbnail"
                src={image}
                alt={`Vêtement personnalisé - Couleur ${selectedColor} - Image ${index + 1}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
        </div>
        <button className="back-button">
          <Link to="/">Retour à la page d'accueil</Link>
        </button>
      </div>
    </div>
  );
};

export default CustomClothing;