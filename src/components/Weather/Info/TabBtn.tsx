import {Dispatch, SetStateAction} from "react";

interface ITabBtn {
    activeTab: string
    tabBtn: string
    label: string
    // handleChangeTab: (index:string) => Dispatch<SetStateAction<string>>
    handleChangeTab: (index:string) => void
}

function TabBtn({activeTab, handleChangeTab, tabBtn, label}: ITabBtn) {
    const handleClick = () => handleChangeTab(tabBtn)
    const classes = activeTab === tabBtn ? "info__btn active" : "info__btn"

    return (
        <button className={classes} onClick={handleClick}>
            {label}
        </button>
    )
}

export default TabBtn
