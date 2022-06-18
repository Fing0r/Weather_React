import {ITabBtn} from "../../types/Weather";
import {FC} from "react";

const TabBtn: FC<ITabBtn> = ({activeTab, handleChangeTab, tabBtn, label}) => {
    const handleClick = () => handleChangeTab(tabBtn)
    const classes = activeTab === tabBtn ? "info__btn active" : "info__btn"

    return (
        <button className={classes} onClick={handleClick}>
            {label}
        </button>
    )
}

export default TabBtn
