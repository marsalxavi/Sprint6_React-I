import React from "react"

function Book(props) {
    return (
        <div>
            <h2>{props.fTitle}</h2>
            <p>{props.fAuthor}</p>
        </div>
    )
}

export default Book;