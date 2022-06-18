import {IButton} from "../types/UI";
import {FC} from "react";

const Button: FC<IButton> =
    ({
         children,
         className,
         label,
         onClick
     }) => {
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
