import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";


import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import Blogs from "../pages/Shared/Blogs/Blogs";
import NotFound from "../pages/Shared/NotFound/NotFound";
import ChefCard from "../pages/Shared/ChefCard/ChefCard";
import ChefRecipes from "../pages/Shared/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ChefRecipes/:ChefId',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/cuisine/${params.id}`)
              },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }, 
            {
                path: 'terms', 
                element: <Terms></Terms>
            },

            {
                path: '*',
                element: <NotFound></NotFound>
        
            }
        ]
    }
      
])

export default router;