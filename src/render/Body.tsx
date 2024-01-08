import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Body() {
    return (
        <>
            <div>Body</div>
            <button type='button'>
                <Link to="/">Homeへ</Link>
            </button>
        </>
    )
}