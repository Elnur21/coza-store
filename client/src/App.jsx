import ScrollTop from "./components/common/ScrollTop";
import "../src/assets/style/main.css"
import "../src/assets/style/responsive.css"
import "../src/assets/style/login.css"
import { CardContextProvider } from "./context/CardContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./routes/routes";
import { UserContextProvider } from "./context/UserContext";

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <UserContextProvider>
      <CardContextProvider>
        <ScrollTop />
        <RouterProvider router={router} />
      </CardContextProvider>
    </UserContextProvider>
  );
}

export default App;
