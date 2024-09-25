import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { SeatsGrid } from "./pages/SeatsGrid";


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
                element:<SeatsGrid/>
            }
        ]
    }
])

export {router};