import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Root from '../components/root/index';
import Error404 from '../components/404/index';
import LandingPage from '../components/landingPage/LandingPage';

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
        ],
    },
]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}
