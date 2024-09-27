import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { CinemaRoom } from "./pages/cinemaRoom";



const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },

            {
                path:'/sala-poltronas',
                element:<CinemaRoom/>
            }
        ]
    }
])

export {router};