import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayout from "./AppLayout.tsx";
import {About, Contact, Home, NotFound, UserProfile} from "./Pages.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "user/:userId",
                element: <UserProfile/>
            },
            {
                path: "*",
                element: <NotFound/>
            },

        ]
    }
]);



const RouterDemo = () => {
    return <RouterProvider router={router} />
}

export default RouterDemo;