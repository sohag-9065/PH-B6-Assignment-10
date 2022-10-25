import Main from "../layout/Main.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Courses from "../pages/Courses/Courses.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/Login/SignUp.jsx";
import ErrorPage from "../shared/ErrorPage.jsx";

const { createBrowserRouter } = require("react-router-dom");



const router =  createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "home",
                element: <Home></Home>
            },
            {
                path: "courses",
                element: <Courses></Courses>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "sign-up",
                element: <SignUp></SignUp>
            }


        ]
         
    }
])

export default router;