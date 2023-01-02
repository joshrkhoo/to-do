import React, { useState } from "react";

const TodoForm = () =>{
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return(
        <div>
            <form>

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
                        />
                    </div>
                </div>


                <div>
                    <label>

                    </label>
                </div>

            </form>
        </div>
    )

}