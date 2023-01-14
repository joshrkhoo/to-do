import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoForm from './TodoForm'


const ViewTodos = ({ tab }) => {
    const url = 'https://todoapi.khoo.one'

    const {deleting, setDeleting} = useState([])

    const deletePost= async () =>{
        delete(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setDeleting(data)
        }) 
    }

    useEffect(()=>{
        deletePost()
    }, [])

    const date = new Date(tab.createdDate).toLocaleDateString()
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>Date: {date}</p>
            <p className="postDescription">{tab.description}</p>


            <button 
                type="Delete"
                onDelete = {(e) => deletePost(e)}
            >
                Delete
            </button>
        </div>
    )
}

export default ViewTodos;