import Main from "../layout/Main.jsx";
import { coursesData } from "../loaders/getCoursesData.js";
import Blog from "../pages/Blog/Blog.jsx";
import AllCourse from "../pages/Courses/AllCourse.jsx";
import CourseDetail from "../pages/Courses/CourseDetail.jsx";
import Courses from "../pages/Courses/Courses.jsx";
import Faq from "../pages/FAQ/Faq.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/Login/SignUp.jsx";
import Primium from "../pages/Primium/Primium.jsx";
import ErrorPage from "../shared/ErrorPage.jsx";
import ProtectRoute from "./ProtectRoute.jsx";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: coursesData,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "faq",
                element: <Faq></Faq>
            },
            {
                path: "courses",
                element: <Courses></Courses>,
                children: [
                    {
                        path: "",
                        element: <AllCourse></AllCourse>
                    },
                    {
                        path: "course-detail/:course_id",
                        element: <CourseDetail></CourseDetail>,
                        loader: ({ params }) => fetch(`https://ph-b6-assignmet10-server.vercel.app/course/${params.course_id}`)
                    },

                ]
            },
            {
                path: "/primium/:id",
                loader: ({ params }) => fetch(`https://ph-b6-assignmet10-server.vercel.app/course/${params.id}`),
                element:
                    <ProtectRoute>
                        <Primium></Primium>
                    </ProtectRoute>
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