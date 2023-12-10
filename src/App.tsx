import routes from "@/routes/routes";
import { RouterProvider } from "react-router-dom";
import { useAppSelector } from "./redux/store";
import BUILoading from "./components/shared/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loading } = useAppSelector((state) => state.globalStyles);
  return (
    <>
      {loading && <BUILoading />}
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
