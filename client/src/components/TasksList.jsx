import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/Tasks.api';
import {TaskCard} from './TaskCard'
 

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

  return (
    <div className='grid grid-cols-3 gap-3'>
      {tasks.map(task =>(
          <TaskCard key={task.id} task={task}/>
      ))}
    </div>)
  
}

export default TasksList