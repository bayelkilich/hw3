import React from 'react';

export const TodoList = ({ todo, setTodo }) => {
    const handleDelete = (id) => {
        setTodo(prevTodos => prevTodos.filter(item => item.id !== id));
    };

    return (
        <div className="todoCont">
            <h1>Todo List</h1>
            <input placeholder="search todos" type="text" />
            {todo && todo.map((item) => (
                <div key={item.id} className="todoItem">
                    <p>{item.text}</p>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};



