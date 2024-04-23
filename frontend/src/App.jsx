import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/Main/MainPage";

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
