import React, {createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';


export const TodoContext = createContext()

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("") 
    const [description, setDescription] = useState("")

    const url = 'http://127.0.0.1:5000/todos'
    const fetchTodoData = async () => {
        fetch(url) //fetch funcion returns a promise
            .then((response) => response.json()) //converting data into javascript object (better for us)
            .then((data) => { //gets data from api
                console.log(data) //logs the data to the console 
                setTodos(data)
            });
    }

    useEffect(() => {
        fetchTodoData() //callback function
    },[]) // an empty array '[]' ensures the component runs only when the component is registered

    function submitTodo(e){

        e.preventDefault()

         axios.post(url, {
            title: title,
            description: description
        })
            // What is this called? What does this occur?
            // What is the thing inside here () => {}
            .then(response => {
                setTitle("")
                setDescription("")
                fetchTodoData()
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            /*
            What is catch? When does this occur
                - catches misbehaving code to ensure our app doesnt blow up into smithereens
            */
            .catch(err =>{
                console.log(err.response.status)
            })
    }


    const deleteTodo = (e, todoid) =>{
        e.preventDefault()
        fetch(url + todoid,{
            method: 'DELETE'
        }) 
        .then((resp)=>{
                console.log(resp)
                fetchTodoData()
         })
        .catch(err =>{
            console.log(err.resp.status)
        })
    }


    return (
        <TodoContext.Provider value={
            {   todos, 
                setTodos, 
                title, 
                setTitle, 
                description, 
                setDescription, 
                submitTodo, 
                deleteTodo,
            }
        }>

            {children}

        </TodoContext.Provider>
    )

}

export const useTodoContext = () => useContext(TodoContext)