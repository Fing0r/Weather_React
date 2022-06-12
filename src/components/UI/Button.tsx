import {IButton} from "../types/UI";

function Button({children, className, label, onClick}: IButton) {
    return (
        <button
            className={className || "btn"}
            onClick={onClick}
        >
            {label}
            {children}
        </button>
    )
}

export default Button
