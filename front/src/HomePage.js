import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenu</h1>
      <h3>Voici mon Appli web </h3>
      <p>Elle se comporte de plusieur module</p><br/>
      <p>To Do List : vous pouvez ajouter des element cependant ils ne sont pas en BDD donc a chaque refresh cela part<br/>CV_Enzo : c'est un constructeur de CV, il y aura bientot une fonctionnalité afin de le télécharger en PDF <br/> Streaming : Site concurentiel de Youtube, vous faites votre recherche et vous choisissez votre vidéo <br/> Home : Voici une page de payement FONCTIONNEL</p>
      

      <Link to="/ToDoList">To Do List <br/></Link>
      <Link to="/CV_Enzo">CV De Enzo<br/></Link>
      <Link to="/streaming">Streaming pour concurencer youtube<br/></Link>
      <Link to="/site">Home<br/></Link>

    </div>
  );
}

export default Home;