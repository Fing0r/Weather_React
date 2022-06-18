import {FC} from "react";
import {ITabItem} from "@/components/types/Weather";


const TabItem: FC<ITabItem> = (
    {
        children,
        tabItem,
        activeTab
    }
) => {
    if (activeTab !== tabItem) return null;

    return (
        <div className="info__box active">
            {children}
        </div>
    )
}

export default TabItem
