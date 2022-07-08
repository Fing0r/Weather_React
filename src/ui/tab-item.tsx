import { FC } from "react";
import { ITabItem } from "@/types/UI";

const TabItem: FC<ITabItem> = ({ children, tab, activeTab }) => {
    if (activeTab !== tab) return null;

    return <div className='info__box active'>{children}</div>;
};

export default TabItem;
