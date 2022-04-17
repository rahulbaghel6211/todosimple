import './item.css';

export const Todolist = ({ todo, handlestatus, deleteitem }) => {

    return <div className="main">

        <h3 style={todo.status ? { color: "green" } : { color: "red" }}>{todo.title}</h3>

        <button onClick={() => handlestatus(todo.id)} className={todo.status ? "green" : "red"}>O</button>


        <button className="remove" onClick={() => deleteitem(todo.id)}>Remove</button>
    </div>
}