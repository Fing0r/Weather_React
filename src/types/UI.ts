import { MouseEventHandler, ReactNode } from "react";

export interface IButton {
    children?: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
    label?: string | null;
}

export interface ITabItem {
    tab: string;
    activeTab: string;
    children: ReactNode;
}

export interface ITabBtn {
    activeTab: string;
    label: string;
    handleChangeTab: (index: string) => void;
}
