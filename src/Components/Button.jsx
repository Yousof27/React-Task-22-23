/* eslint-disable react/prop-types */
function Button({ text, onclick }) {
    return (
        <button onClick={onclick}>{text}</button>
    )
}

export default Button;