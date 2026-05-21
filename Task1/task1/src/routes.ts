import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AdminLayouts from "./layouts/AdminLayouts";



export const router = createBrowserRouter([
    {
        path: "/",
        Component:Home
    },

    {
        path : "/admin",
        Component:AdminLayouts
    }
]);