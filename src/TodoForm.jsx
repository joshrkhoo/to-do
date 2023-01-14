import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewTodos from "./ViewTodos";

const TodoForm = () => {
    const url = "https://todoapi.khoo.one"

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    function submit(e) {
        window.location.reload(false)
        axios.post(url, {
            title: title,
            description: description
        })
            .then(res => {
                setTitle("")
                setDescription("")
            })
            .catch(err =>{
                console.log(err.response.status)
            })
    }


    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            placeholder="Title"
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