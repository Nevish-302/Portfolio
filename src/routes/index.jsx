import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Root from '../components/root/index';
import Error404 from '../components/404/index';
import LandingPage from '../components/LandingPage/LandingPage';

export default function Routes() {
    const routes = createBrowserRouter([{
        path: "/", 
        element : <Root />, 
        children : [
            {
                path: "",
                element: <LandingPage />
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

// add errorElement : <Error404 />, to / path