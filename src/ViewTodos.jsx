import axios from "axios";
import React, { useEffect, useState } from "react";
import deletePost from './ViewTodos'

const ViewTodos = ({ tab }) => {
    const client = axios.create({ baseURL: 'https://todoapi.khoo.one', });
    const [posts, setPosts] = useState([])


    const deletePost = async (id) => {
        try {
            await client.delete('${id}');
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(deletePost())
    const date = new Date(tab.createdDate).toLocaleDateString()
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>Date: {date}</p>
            <p className="postDescription">{tab.description}</p>


            <button
                type="Delete"
                onClick={() => deletePost(tab.id)}
            >
                Delete
            </button>
            
        </div>     
    )

}

export default ViewTodos;