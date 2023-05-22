import AdminRoot from '../pages/admin/AdminRoot'
import ADashboard from '../pages/admin/home/ADashboard'
import MainRoot from '../pages/user/MainRoot'
import About from '../pages/user/about/About'
import Blog from '../pages/user/blog/Blog'
import BlogContent from '../pages/user/blog/BlogContent'
import Contact from '../pages/user/contact/Contact'
import Features from '../pages/user/features/Features'
import Dashboard from '../pages/user/home/Dashboard'
import Shop from '../pages/user/shop/Shop'
export const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Dashboard/>,
            },
            {
                path:"shop",
                element:<Shop/>,
            },
            {
                path:"blog",
                element:<Blog/>,
            },
            {
                path:'blog/blog-content',
                element:<BlogContent/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"features",
                element:<Features/>,
            },
            {
                path:'*',
                element:<NotFound/>,
            },
        ]
    },
{
    path:'/admin',
    element:<AdminRoot/>,
    children:[
        {
            path:'',
            element:<ADashboard/>,
        }
    ]
}
]
