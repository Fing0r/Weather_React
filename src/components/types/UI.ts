import {MouseEventHandler, ReactNode} from "react";

export interface IButton {
    children?: ReactNode
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: string
    label?: string | null
}
