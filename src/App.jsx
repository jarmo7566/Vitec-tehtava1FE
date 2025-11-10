import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Wastebin, {
  loader as wastebinLoader,
} from "./features/wastebin/Wastebin";
import User, { loader as userLoader } from "./features/user/User";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import CreateMessage from "./features/message/CreateMessage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wastebin",
        element: <Wastebin />,
        loader: wastebinLoader,
        errorElement: <Error />,
      },
      {
        path: "/user",
        element: <User />,
        loader: userLoader,
        errorElement: <Error />,
      },
      {
        path: "/message/new",
        element: <CreateMessage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
