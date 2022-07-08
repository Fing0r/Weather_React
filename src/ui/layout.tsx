import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/ui/header";

const Layout: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
