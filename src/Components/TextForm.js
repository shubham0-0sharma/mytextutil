import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");

    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    };
    const handleLowClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    };
    const handleOnChange = (event) => {
        // console.log("Handle on change");
        setText(event.target.value);
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };
    return (
        <div
            className="contianer"
            style={{
                color: props.mode === "light" ? "black" : "white",
            }}
        >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor:
                            props.mode === "dark" ? "grey" : "white",

                        color: props.mode === "light" ? "black" : "white",
                    }}
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                Clear text
            </button>
            <div
                className="container"
                style={{
                    color: props.mode === "light" ? "black" : "white",
                }}
            >
                <h2>Text Summary</h2>
                <p>
                    The text has {text.length} characters and{" "}
                    {text.split(" ").length} words
                </p>

                <h2>Preview</h2>
                {text.length > 0 ? text : "Enter Someting to Preview it here"}
            </div>
        </div>
    );
}
