import { FC } from "react";
import { ITabBtn } from "@/types/UI";

const TabBtn: FC<ITabBtn> = ({ activeTab, handleChangeTab, label }) => {
    const handleClick = () => handleChangeTab(label);
    const classes = activeTab === label ? "info__btn active" : "info__btn";

    return (
        <button className={classes} onClick={handleClick} type='button'>
            {label}
        </button>
    );
};

export default TabBtn;
