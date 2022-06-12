import {ChangeEventHandler, MouseEventHandler} from "react";

export interface IInput {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    type: string
    placeholder: string
}

export interface IButton {
    children?: JSX.Element | never[]
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: string
    label?: string | null
}
