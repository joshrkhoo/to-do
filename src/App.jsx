import './App.css'
import TodoContainer from './TodoContainer';
import React from "react";
import {TodoContextProvider} from './TodoContext'
import {ViewTodos} from './ViewTodos'
import {TodoForm} from './TodoForm'


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