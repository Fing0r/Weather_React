interface ITabItem {
    tabItem: string
    activeTab: string
    children: JSX.Element | null
}

function TabItem({children, tabItem, activeTab}: ITabItem) {
    if (activeTab !== tabItem) return null;

    return(
        <div className="info__box active">
            {children}
        </div>
    )
}

export default TabItem
