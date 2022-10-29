import { createBrowserRouter } from "react-router-dom";
import AboutUS from "../Layout/AboutUS";
import AllCourse from "../Layout/AllCourse";
import Blog from "../Layout/Blog";
import CourseDeatils from "../Layout/CourseDeatils";
import Courses from "../Layout/Courses";
import FAQ from "../Layout/FAQ";
import Main from "../Layout/Main";
import LogIn from "../Layout/LogIn"
import Register from "../Layout/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,

                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('http://localhost:5000/course-name'),
                        element: <AllCourse></AllCourse>
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDeatils></CourseDeatils>
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
                path: '/about-us',
                element: <AboutUS></AboutUS>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])