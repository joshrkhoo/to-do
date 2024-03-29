import React from "react";
import { useState, useEffect } from "react";
import ViewTodos from './ViewTodos'
import TodoForm from './TodoForm'
import axios from "axios";
import { useTodoContext } from "./TodoContext";


export const TodoContainer = () => {
    // const url = 'http://127.0.0.1:5000/todos'
    // const [todos, setTodos] = useState([])


    // //The word “async” before a function means one simple thing: a function always returns a promise.
    // //await makes js wait until that promise settles, then returns its result
    // const fetchData = async () => {
    //     fetch(url) //fetch funcion returns a promise
    //         .then((response) => response.json()) //converting data into javascript object (better for us)
    //         .then((data) => { //gets data from api
    //             console.log(data) //logs the data to the console 
    //             setTodos(data)
    //         });

    // }

    // //The default behaviour of an effect is to fire the effect after every completed render. From this an effect is always recreated if one of its dependencies change. 
    // //This may be overkill if we dont want a new effect every update.
    // //Using a second argument, in this case an empty array '[]', ensures that the code inside the callback function will run only when the component gets registered, and that is it.

    // useEffect(() => {
    //     fetchData() //callback function
    // },[]) // an empty array '[]' ensures the component runs only when the component is registered

    const {todos} = useTodoContext()

    return (
        <div>


            <h2 className="title">To do List</h2>

            <div className="form">
                <TodoForm/>
            </div>

            {
                todos?.length > 0
                    ? (
                        <div>
                            {todos.map((todo, i) => (
                                <ViewTodos key={i} tab={todo} />
                            ))}
                        </div>
                    ) :
                    <div>
                        Loading...
                    </div>
            }

        </div>
        
    )
}

export default TodoContainer;   