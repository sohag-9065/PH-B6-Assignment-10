import Main from "../layout/Main.jsx";
import ErrorPage from "../shared/ErrorPage.jsx";

const { createBrowserRouter } = require("react-router-dom");



const router =  createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>
         
    }
])

export default router;