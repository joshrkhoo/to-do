import React, { useState } from "react";

const TodoForm = () =>{
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>
                        Title
                    </label>
                    <div>
                        <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        placeholder="hello"
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>


                <div>
                    <label>
                        Description
                    </label>
                    <div>
                        <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        placeholder="hi there"
                        onChange={(e) => setDescription(e.target.value)} 
                        // 'e' is a synthetic event specific for the handler 'onChange'
                        />
                    </div>
                </div>

            </form>
        </div>
    )

}

export default TodoForm