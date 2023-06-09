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
import AddCard from "../pages/admin/cards/AddCard";
import AddCategory from "../pages/admin/categories/AddCategory";
import Banners from "../pages/admin/banners/Banners";
import UpdateBanner from "../pages/admin/banners/UpdateBanner";
import Contacts from "../pages/admin/contacts/Contacts";
import UpdateContact from "../pages/admin/contacts/UpdateContact";
import Slides from "../pages/admin/slides/Slides";
import UpdateSlide from "../pages/admin/slides/UpdateSlides";
import Blogs from "../pages/admin/blogs/Blogs";
import UpdateBlog from "../pages/admin/blogs/UpdateBlog";
import FAQs from "../pages/general/FAQs";
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
        path: "blog/:id",
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
        path: "faqs",
        element: <FAQs />,
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
      {
        path: "add-card",
        element: <AddCard />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "banners",
        element: <Banners />,
      },
      {
        path: "banners/:id",
        element: <UpdateBanner />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "contacts/:id",
        element: <UpdateContact />,
      },
      {
        path: "slides",
        element: <Slides />,
      },
      {
        path: "slides/:id",
        element: <UpdateSlide />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <UpdateBlog />,
      },
    ],
  },
];
