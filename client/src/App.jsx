import ScrollTop from "./components/common/ScrollTop";
import "../src/assets/style/main.css"
import "../src/assets/style/responsive.css"
import { CardContextProvider } from "./context/CardContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./routes/routes";

const router=createBrowserRouter(ROUTES)

function App() {
  return (
    <CardContextProvider>
      <ScrollTop />
      <RouterProvider router={router}/>
    </CardContextProvider>
  );
}

export default App;
