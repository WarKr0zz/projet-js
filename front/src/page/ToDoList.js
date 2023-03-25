import React, { useState, useRef, useEffect } from 'react';
import myImage from '../logo.jpg';
import myMusic from '../naps.mp3';

function TDLIST() {
  // Définit le composant To Do List en utilisant les hooks useState et useRef de React pour gérer les tâches et la lecture audio. 
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const audioRef = useRef(null);

// Utilise useEffect pour que l'audio commence à être lu immédiatement après le rendu du composant.
  useEffect(() => {
    audioRef.current.play();
  }, []);

// Définit les fonctions pour ajouter, supprimer et changer l'état d'une tâche (faite ou non faite). Les fonctions utilisent setTaskList pour modifier la liste des tâches.
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    setTaskList([...taskList, { taskName: task, isDone: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const toggleTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].isDone = !newTaskList[index].isDone;
    setTaskList(newTaskList);
  };
  
// Retourne le JSX qui affiche la To Do List et utilise les fonctions définies précédemment pour ajouter, supprimer et changer l'état des tâches.
  return (
    <div>
      <h1>To Do List de Enzo</h1>
      <img className="App-logo" src={require('../logo.jpg')} alt="Mon image" />
      <img className="App-logo" src={require('../image.gif')} alt="Mon imagee" />
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={addTask}>Ajouter une tâche</button>
      <audio ref={audioRef} src={myMusic} autoPlay />
      <ul>
        {taskList.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <button onClick={() => toggleTask(index)} style={{ marginLeft: "0px", backgroundColor: task.isDone ? "gray" : "green", color: "white", border: "none", padding: "5px", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }}>{task.isDone ? "Annuler" : "Effectuer"}</button>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: "0px", backgroundColor: "red", color: "white", border: "none", padding: "5px", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }}>Supprimer</button>
            <span style={{ textDecoration: task.isDone ? "line-through" : "none", flexGrow: 1 }}>{task.taskName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TDLIST;