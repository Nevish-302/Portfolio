import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Root from '../components/root/index';
import Error404 from '../components/404/index';
import LandingPage from '../components/landingPage/LandingPage';
import Projects from '../components/projects/Projects';
import AboutMe from '../components/aboutMe/AboutMe';
import Contacts from '../components/contact/Contacts';

export default function Routes() {
    const routes = createBrowserRouter([{
        path: "/", 
        errorElement : <Error404 />,
        element : <Root />, 
        children : [
            {
                path: "",
                element: <LandingPage />
            },
            {
                path: "projects",
                element : <Projects />
            },
            {
                path: "about",
                element: <AboutMe />
            },
            {
                path: "contacts",
                element: <Contacts />
            },
        ],
    },
]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}
