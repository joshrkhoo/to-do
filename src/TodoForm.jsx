import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewTodos from "./ViewTodos";

const TodoForm = () => {
    // What kind of API is this?
    // What happens if I go to the link?
    const url = "https://todoapi.khoo.one"

    // What is useState? What is this form of variable assignment called? [title, setState]
    const [title, setTitle] = useState("") // What am I storing in here?
    const [description, setDescription] = useState("") // What am I storing in here?
  

    // What is the purpose of this function?
    function submit(e) {
        // What does this do? Do we need it? Can we try to do this without refreshing?
        // Is there another way to make it not reload using the e?
        window.location.reload(false)

        // What is this method? What is axios?
        // What are the parameters here? What else can we put in there
        // What does this method return?
        axios.post(url, {
            title: title,
            description: description
        })
            // What is this called? What does this occur?
            // What is the thing inside here () => {}
            .then(response => {
                setTitle("")
                setDescription("")
            })
            // What is catch? When does this occur
            .catch(err =>{
                console.log(err.response.status)
            })
    }


    return (
        <div>
            {/* What does onSubmit do? What is e? */}
            <form onSubmit={(e) => submit(e)}>
                <div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            placeholder="Title"
                            {/* What does onChange do? What is e? */}
                            onChange={(e) => setTitle(e.target.value)} 
                            className="formTitle"
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            placeholder="What to do?"
                            {/* What does onChange do? What is e? */}
                            onChange={(e) => setDescription(e.target.value)}
                            className="formDescription"
                        // 'e' is a synthetic event specific for the handler 'onChange'
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                    >
                        submit
                    </button>
                </div>
            </form>
        </div>
    )

}

export default TodoForm;