import React from "react";

const ViewTodos = ({tab}) => {
    const date = new Date(tab.createdDate).toGMTString()
    return (
        <div className="tabs">
            <h3>{tab.title}</h3>
            <p>{date}</p>
            <p>{tab.description}</p>
        </div>
    )
}

export default ViewTodos;