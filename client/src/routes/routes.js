import NotFound from "../components/notFound/NotFound";
import AdminRoot from "../pages/admin/AdminRoot";
import ADashboard from "../pages/admin/home/ADashboard";
import LogIn from "../pages/login/LogIn";
import Register from "../pages/login/Register";
import MainRoot from "../pages/user/MainRoot";
import About from "../pages/user/about/About";
import Blog from "../pages/user/blog/Blog";
import BlogContent from "../pages/user/blog/BlogContent";
import Contact from "../pages/user/contact/Contact";
import Features from "../pages/user/features/Features";
import Dashboard from "../pages/user/home/Dashboard";
import Shop from "../pages/user/shop/Shop";
import LoginForgetPassword from "../pages/login/LoginForgetPassword";
import Users from "../pages/admin/users/Users";
import UserUpdate from "../pages/admin/users/UserUpdate";
import Categories from "../pages/admin/categories/Categories";
import UpdateCategory from "../pages/admin/categories/UpdateCategory";
import Cards from "../pages/admin/cards/Cards";
import CardUpdate from "../pages/admin/cards/UpdateCard";
export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/blog-content",
        element: <BlogContent />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "login/forgetPassword",
        element: <LoginForgetPassword />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <ADashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:id",
        element: <UserUpdate />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:id",
        element: <UpdateCategory />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "cards/:id",
        element: <CardUpdate />,
      },
    ],
  },
];
