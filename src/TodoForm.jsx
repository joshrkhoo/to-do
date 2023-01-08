import React, { useState } from "react";
import axios from "axios";

const TodoForm = () => {
    const url = "https://todoapi.khoo.one"
    const [data, setData] = useState({
        title: "",
        description: ""
    })


    function submit(e) {
        axios.post(url, {
            title: data.title,
            description: data.description
        })
            .then(res => {
                console.log(res.data)
            })
    }


    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
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
                            value={data.title}
                            placeholder="Title"
                            onChange={(e) => handle(e)}
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
                            value={data.description}
                            placeholder="What to do?"
                            onChange={(e) => handle(e)}
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