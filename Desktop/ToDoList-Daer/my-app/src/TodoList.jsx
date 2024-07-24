import React from 'react';
import { useState } from 'react';
function ToDoList() {
    const [newTasks, setNewTasks] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setNewTasks(event.target.value);
    };//actualiza c/vez q el usuario escribe algo nuevo

    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, newTasks])
    }

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div className="App-header">
                <h2>Formulario</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={newTasks}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                <div>
                    <h2>Lista de compras</h2>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                {task}
                                <button onClick={() => removeTask(index)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};
export default ToDoList;