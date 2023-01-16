import axios from "axios";
import React, { useEffect, useState } from "react";
import deletePost from './ViewTodos'

const ViewTodos = ({ tab }) => {
    const client = axios.create({ baseURL: 'https://todoapi.khoo.one', });
    const [posts, setPosts] = useState([])

/*
What is being sent
where am i making the send
what is coming back
*/

    // What does this do
    // What am I using id for
    const deletePost = async (id) => {
        try {
            // What is: '${id}'
            console.log(await client.delete('${id}'));
            
        }
        catch (error) {
            console.log(error);
        }
    }

    // What does this do? Does the delete post execute?
    console.log(deletePost())

    // What is this date for?
    const date = new Date(tab.createdDate).toLocaleDateString()
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>Date: {date}</p>
            <p className="postDescription">{tab.description}</p>


            <button
                type="Delete"
                // What is this id?
                onClick={() => deletePost(tab.id)}
            >
                Delete
            </button>
            
        </div>     
    )

}

export default ViewTodos;