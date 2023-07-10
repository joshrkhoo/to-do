import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTodoContext } from "./TodoContext";


export const ViewTodos = ({tab}) => {
/*
What is being sent
where am i making the send
what is coming back
*/

 

    // const deletePost = (e, todoid) =>{
    //     e.preventDefault()
    //     fetch('https://todoapi.khoo.one/' + todoid,{
    //         method: 'DELETE'
    //     }) 
    //     .then((resp)=>{
    //             console.log(resp)
    //             fetchData()
    //      })
    //     .catch(err =>{
    //         console.log(err.resp.status)
    //     })
    // }



    // What am I using id for
    /* 
        const deletePost = async (todoid) => {
        try {
            alert(todoid)
            console.log(await client.delete('${todoid}'));

             /*What is: '${id}?
                - '$' is a javascript identifier, simply meaning that it identifies an object the same way that a name or variable  does
                - in this case the dollar sign is used to identify the id of the todo being deleted

        }
        catch (error) {
            console.log(error);
        }
        finally{

        }
      */  
      /* 
    What does this do?
    - It is a try...catch...finally statement
    - compromises of a try block and either a catch block, a finally block, or both.
    - code in 'try' block is executed first

        try
        - tests a block of code for errors
        catch 
        - handles the errors
        throw
        - lets us create custom errors
        finally
        - lets us execute code after trying catch regardless of the result
    */
   
    const {deleteTodo} = useTodoContext()

    const date = new Date(tab.createdDate).toLocaleDateString    

    return (
        
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>Date: {date}</p>
            <p className="postDescription">{tab.description}</p>

            <button
                type="Delete"
                // What is this id?
                onClick={deleteTodo}
            >
                Delete
            </button>
            
        </div>     
    )
}

export default ViewTodos;