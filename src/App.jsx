import './App.css'
import React from "react";
import {TodoContextProvider} from './TodoContext'
import {ViewTodos} from './ViewTodos'
import {TodoForm} from './TodoForm'
import {TodoContainer} from './TodoContainer'


const App = () =>{
    return(
        <div>
            <TodoContextProvider>
                <TodoContainer/>
                <TodoForm/>
                <ViewTodos/>
            </TodoContextProvider>
        </div>
    )
}

export default App;