import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AdminLayouts from "./layouts/AdminLayouts";
import MenuManagement from "./pages/MenuManagement";



export const router = createBrowserRouter([
    {
        path: "/",
        Component:Home
    },

    {
        path : "/admin",
        Component:AdminLayouts
    },

    {
        path :"/menu-management",
        Component:MenuManagement
    }
]);