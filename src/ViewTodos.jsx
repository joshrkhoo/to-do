import React from "react";
import TodoForm from './TodoForm'

const ViewTodos = ({ tab }) => {

    const date = new Date(tab.createdDate).toLocaleDateString()
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>{date}</p>
            <div>{tab.description}</div>
        </div>
    )
}

export default ViewTodos;