import Main from "../layout/Main.jsx";

const { createBrowserRouter } = require("react-router-dom");



const router =  createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>
    }
])

export default router;