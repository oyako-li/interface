import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function Chat() {
    const ref = document.querySelector(".req") as HTMLTextAreaElement;
    async function onClick() {
        const res = await window.api.get(ref.value);
        
    }

    return (
        <>
            <h1>Chat</h1>
            <div>
                <form action="" method="post">
                    <label>pronputo:</label>
                    <textarea className="req" cols={30} rows={10} />
                    <button type='submit' onClick={onClick}>
                        submit
                    </button>
                </form>
            </div>
            <button type='button'>
                <Link to="/">Home</Link>
            </button>
        </>
    )
}