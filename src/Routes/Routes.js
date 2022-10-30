import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../Layout/AllCourse";
import Blog from "../Layout/Blog";
import CourseDeatils from "../Layout/CourseDeatils";
import Courses from "../Layout/Courses";
import FAQ from "../Layout/FAQ";
import Main from "../Layout/Main";
import LogIn from "../Layout/LogIn"
import Register from "../Layout/Register";
import Premium from "../Layout/Premium";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Hero from "../Layout/Hero"
import ErrorPage from "../Layout/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {

                path: '/courses',
                element: <Courses></Courses>,


                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('https://coder-city-server.vercel.app/course-name'),

                        element: <AllCourse></AllCourse>
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDeatils></CourseDeatils>,
                        loader: ({ params }) => fetch(`https://coder-city-server.vercel.app/course/${params.id}`)
                    },
                    {
                        path: '/courses/premium/:id',
                        element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://coder-city-server.vercel.app/course/${params.id}`)
                    },

                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/',
                element: <Hero></Hero>,
            }

        ]
    }
])