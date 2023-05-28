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
import { ContactContextProvider } from "./context/ContactContext";
import { SlideContextProvider } from "./context/SlideContext";
import { BannerContextProvider } from "./context/BannerContext";

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <UserContextProvider>

      <CategoryContextProvider>

        <CardContextProvider>

          <ContactContextProvider>

            <SlideContextProvider>

              <BannerContextProvider>

                <ScrollTop />
                <RouterProvider router={router} />

              </BannerContextProvider>

            </SlideContextProvider>

          </ContactContextProvider>

        </CardContextProvider>

      </CategoryContextProvider>

    </UserContextProvider>
  );
}

export default App;
