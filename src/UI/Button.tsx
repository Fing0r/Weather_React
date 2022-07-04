import { FC } from "react";
import { IButton } from "@/types/UI";

const Button: FC<IButton> = ({ children, className, label, onClick, type }) => {
    return (
        <button className={className || "btn"} onClick={onClick} type={type ? "button" : "submit"}>
            {label}
            {children}
        </button>
    );
};

export default Button;
