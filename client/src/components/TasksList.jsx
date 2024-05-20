import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/Tasks.api';

export function TasksList() {
const  [tasks, setTasks] = useState([])

    useEffect(() =>{
    async function loadTasks(){
            const res = await getAllTasks()
            setTasks(res.data)
        }
        console.log('CARGANDO PAGINA');
        loadTasks()
    }, [])

  return <div>
    {tasks.map(task =>(
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    ))}
  </div>
}

export default TasksList