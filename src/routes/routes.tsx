import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import HomePage from "@/pages/home";
import BookPage from "@/pages/books";
import UserPage from "@/pages/user";
import SettingPage from "@/pages/settings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "book",
        element: <BookPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "help",
        element: <UserPage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
      },
    ],
  },
]);

export default routes;
