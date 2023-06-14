import axios from "axios";
import React, { useState } from "react";
import TodoContainer from "./TodoContainer";

const TodoForm = ({fetchData}) => {
    
    /*
    What kind of API is this?
    This is a Rest API (Representational state transfer)
     - communciation 
     - restful 
     Benefits: 
     - simple/standardised 
     - scalable/stateless
     - high performances/cache

     Requests
     (operators, endpoints, parameters/body, headers)
     - create: post
     - read: get
     - update: put
     - delete: delete

     Response
     - array 
     - id 

     What is difference between props and { fetchData }
    */
    
    /*
    What happens if I go to the link?
    - ids of each todo
    - created dates
    - descriptions of the todo 
    */



    const url = 'http://127.0.0.1:5000/todos'

    // What is useState? What is this form of variable assignment called? [title, setState]
    
    const [title, setTitle] = useState("") 
    const [description, setDescription] = useState("")

    /* What am I storing in here? 
    -'title' is the initial value being stored 
    -'setTitle' is a function used to change the initial value
        - line 68
    - The quotations indicate the inital value of the object, in this case being an empty string
    */

    // What is the purpose of this function?
    function submit(e){
        // What does this do? Do we need it? Can we try to do this without refreshing?
        // Is there another way to make it not reload using the e?
        e.preventDefault()
        /*/ 
         What is this method? What is axios?
            - axios is a promise-based HTTP library that lets us make requests to either our own or a third pary server to fetch data.
            - We are using the post method
         What are the parameters here? What else can we put in there
         What does this method return?
        */
         axios.post(url, {
            title: title,
            description: description
        })
            // What is this called? What does this occur?
            // What is the thing inside here () => {}
            .then(response => {
                setTitle("")
                setDescription("")
                fetchData()
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
                            /* What does onChange do? What is e? */
                            onChange={(e) => setTitle(e.target.value)} 
                            className="formTitle"
                            required
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
                            required
                            /* 
                            What does onChange do? What is e?
                                - Onchange is an event handler which returns a synthetic event object containing useful meta data
                                    - meta data: input's id, name, current value
                                    - we can acces the target input's value inside of the handleChange by accessing e.target
                            */
                            onChange={(e) => setDescription(e.target.value)}
                            className="formDescription"
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