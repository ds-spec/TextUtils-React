import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!', 'success');
    }
    const handleTitleClick = () => {
        function titleCase(str) {
            return str.split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }
        setText(titleCase(text));
        props.showAlert('Converted to Titlecase!', 'success');

    }

    const handleClearText = () => {
        setText('');
        props.showAlert('Cleared text successfully!', 'success');

    };
    const handleChange = (event) => {
        setText(event.target.value);

    }

    const handleCopyText = () => {
        const copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied text successfully!', 'success');

    }



    return (
        <>
            <div className='container'>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : props.mode1 === 'danger' ? '#aec6cf' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : props.mode1 === 'danger' ? '#ee82ee' : 'white', color: props.mode === 'dark' ? 'white' : props.mode1 === 'danger' ? 'black' : 'black' }} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleTitleClick}>Convert to Titlecase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>

                <button className='btn btn-color-red'></button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : props.mode1 === 'danger' ? '#aec6cf' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(' ').slice(1).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} min. to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here'}</p>
            </div>
        </>
    )
}
