import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { CinemaSeats } from "./pages/sala";


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
                element:<CinemaSeats/>
            }
        ]
    }
])

export {router};