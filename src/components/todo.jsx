import { useState } from 'react';

import { nanoid } from 'nanoid';

import { Todoin } from './todoin';
import { Todolist } from './todolist';

function Todo() {
    
    const [todoList, setTodosList] = useState([]);

    const getdata = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(4),
        }
        setTodosList([...todoList, payload])
        console.log(todoList)
    }
    const handlestatus = (id) => {
        setTodosList(todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)))
    }
    const deleteitem = (id) => {
        const del = todoList.filter(todoList => id !== todoList.id)
        setTodosList(del)
    }

    return (
        <div>
           
            {todoList.map((e) => (

                <Todolist deleteitem={deleteitem} handlestatus={handlestatus} todo={e}></Todolist>
            ))}


            <Todoin getdata={getdata} />


        </div>

    );
}
export { Todo };