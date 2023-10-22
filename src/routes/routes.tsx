import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home";
import BookPage from "@/pages/Book";
import RootLayout from "@/components/layout/RootLayout";

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
    ],
  },
]);

export default routes;
