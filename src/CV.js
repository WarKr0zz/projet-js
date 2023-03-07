import React, { useState } from 'react';


import './CV.css';

function CV() {
  // Définition de variables d'état pour stocker les informations personnelles, la liste des formations et la liste des expériences professionnelles
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [educationList, setEducationList] = useState([{ institution: "", degree: "", year: "" }]);
  const [experienceList, setExperienceList] = useState([{ company: "", position: "", startDate: "", endDate: "", description: "" }]);
  const [image, setImage] = useState(null);

  // Gestionnaires d'événements pour la modification des informations personnelles
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  // Gestionnaires d'événements pour la modification des formations
  const handleEducationChange = (index, field, event) => {
    const newList = [...educationList];
    newList[index][field] = event.target.value;
    setEducationList(newList);
  };
  const addEducation = () => {
    setEducationList([...educationList, { institution: "", degree: "", year: "" }]);
  };
  const deleteEducation = (index) => {
    const newList = [...educationList];
    newList.splice(index, 1);
    setEducationList(newList);
  };

  // Gestionnaires d'événements pour la modification des expériences professionnelles
  const handleExperienceChange = (index, field, event) => {
    const newList = [...experienceList];
    newList[index][field] = event.target.value;
    setExperienceList(newList);
  };
  const addExperience = () => {
    setExperienceList([...experienceList, { company: "", position: "", startDate: "", endDate: "", description: "" }]);
  };
  const deleteExperience = (index) => {
    const newList = [...experienceList];
    newList.splice(index, 1);
    setExperienceList(newList);
  };

  
  


  
  return (
    
    <div>
     
      
      <h1>Créer un CV</h1>
      {/* Formulaire pour les informations personnelles */}
      <h2>Informations personnelles</h2>
      <label>
        Image : 
        <input type="file" onChange={handleImageChange} />
      </label>
      {image && <img src={image} alt="Uploaded" className="image image-filter" />}
      <label>
        Prénom:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        
        Nom:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Numéro de téléphone:
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <label>
        Adresse:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      
       {/* Liste des formations */}
      <h2>Formation</h2>
      <button onClick={addEducation}>Ajouter une formation</button>
      <ul>
        
        {educationList.map((education, index) => (
          <li key={index}>
            <label>
              Institution:
              <input type="text" value={education.institution} onChange={(event) => handleEducationChange(index, "institution", event)} />
            </label>
            <label>
              Diplôme:
              <input type="text" value={education.degree} onChange={(event) => handleEducationChange(index, "degree", event)} />
            </label>
            <label>
          Année d'obtention:
          <input type="text" value={education.year} onChange={(event) => handleEducationChange(index, "year", event)} />
        </label>
        <button onClick={() => deleteEducation(index)}>Supprimer</button>
      </li>
    ))}
  </ul>
  {/* Liste des Experience pro */}
  <h2>Expérience professionnelle</h2>
  <button onClick={addExperience}>Ajouter une expérience</button>
  <ul>
    {experienceList.map((experience, index) => (
      <li key={index}>
        <label>
          Entreprise:
          <input type="text" value={experience.company} onChange={(event) => handleExperienceChange(index, "company", event)} />
        </label>
        <label>
          Poste:
          <input type="text" value={experience.position} onChange={(event) => handleExperienceChange(index, "position", event)} />
        </label>
        <label>
          Date de début:
          <input type="text" value={experience.startDate} onChange={(event) => handleExperienceChange(index, "startDate", event)} />
        </label>
        <label>
          Date de fin:
          <input type="text" value={experience.endDate} onChange={(event) => handleExperienceChange(index, "endDate", event)} />
        </label>
        <label>
          Description:
          <textarea value={experience.description} onChange={(event) => handleExperienceChange(index, "description", event)} />
        </label>
        <button onClick={() => deleteExperience(index)}>Supprimer</button>
      </li>
    ))}
  </ul>
  {/* Récapitulatif du CV  */}
  <h2>Récapitulatif</h2>
  <p>Nom complet: {firstName} {lastName}</p>
  <p>Email: {email}</p>
  <p>Numéro de téléphone: {phoneNumber}</p>
  <p>Adresse: {address}</p>
  <h3>Formation</h3>
  <ul>
    {educationList.map((education, index) => (
      <li key={index}>
        <p>Institution: {education.institution}</p>
        <p>Diplôme: {education.degree}</p>
        <p>Année d'obtention: {education.year}</p>
      </li>
    ))}
  </ul>
  <h3>Expérience professionnelle</h3>
  <ul>
    {experienceList.map((experience, index) => (
      <li key={index}>
        <p>Entreprise: {experience.company}</p>
        <p>Poste: {experience.position}</p>
        <p>Date de début: {experience.startDate}</p>
        <p>Date de fin: {experience.endDate}</p>
        <p>Description: {experience.description}</p>
      </li>
    ))}
  </ul>
  
</div>
);
}

export default CV;