import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoForm from './TodoForm'


const ViewTodos = ({ tab }) => {
    const url = 'https://todoapi.khoo.one'




    const [deleting, setDeleting] = useState(false)
    
    function deletePost(){
        fetch(url, {method:'DELETE'})
        .then(()=>this.setDeleting({status: "Delete Successful"}))
    }
    useEffect(() =>{
        deletePost();
    }

    )

    const date = new Date(tab.createdDate).toLocaleDateString()
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>{date}</p>
            <p className="postDescription">{tab.description}</p>

            <button
                type="button"
                className="deleteButton"
                onClick={() => deletePost()}
            >
                delete
            </button>
        </div>
    )
}

export default ViewTodos;