import React from "react";
const capitalize = (word) => {
    const myLower = word.toLowerCase();
    return myLower.charAt(0).toUpperCase() + myLower.slice(1);
};
export default function Alert(props) {
    return (
        props.alert && (
            <div
                className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                role="alert"
            >
                <strong>{capitalize(props.alert.msg)}</strong>
            </div>
        )
    );
}
