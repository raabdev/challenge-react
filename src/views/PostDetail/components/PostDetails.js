import React from 'react'

export default function PostDetails({ title, body }) {
    return (
        <>
            <h4>{title}</h4>
            <p>{body}</p>
        </>
    )
}
