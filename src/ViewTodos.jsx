import { eventWrapper } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import deletePost from './ViewTodos'

const ViewTodos = ({ tab, fetchData }) => {
    /*
    What is being sent
    where am i making the send
    what is coming back
    */



    const deletePost = (e, todoid) => {
        e.preventDefault()
        console.log(todoid)
        fetch('http://127.0.0.1:5000/todos/' + todoid, {
            method: 'DELETE'
        })
            .then((resp) => {
                console.log(resp)
                fetchData()
            })
            .catch(err => {
                console.log(err.resp?.status)
            })
        // window.location.reload()
    }



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


    // What is this date for?
    // const date = new Date(tab.datetime_created).toLocaleDateString('en-AU');
    // const time = new Date(tab.datetime_created).toLocaleTimeString('en-AU', { hour: 'numeric', minute: 'numeric', hour12: true });
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    var date = new Date(tab.datetime_created)
    date = date.toLocaleDateString('en-AU', options)
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            {tab.datetime_created && <p>{date}</p>}
            <p className="postDescription">{tab.description}</p>


            <button
                type="Delete"
                // What is this id?
                onClick={(e) => deletePost(e, tab.id)}
            >
                Delete
            </button>

        </div>
    )

}

export default ViewTodos;