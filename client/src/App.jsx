import ScrollTop from "./components/common/ScrollTop";
import "../src/assets/style/main.css"
import "../src/assets/style/responsive.css"
import "../src/assets/style/login.css"
import "../src/assets/style/admin.css"
import { CardContextProvider } from "./context/CardContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./routes/routes";
import { UserContextProvider } from "./context/UserContext";
import { CategoryContextProvider } from "./context/CategoryContext";

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <UserContextProvider>
      <CategoryContextProvider>
        <CardContextProvider>
          <ScrollTop />
          <RouterProvider router={router} />
        </CardContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  );
}

export default App;
