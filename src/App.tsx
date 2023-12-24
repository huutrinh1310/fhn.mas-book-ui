import routes from "@/routes/routes";
import { RouterProvider } from "react-router-dom";
import { useAppSelector } from "./redux/store";
import BUILoading from "./components/shared/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const { loading } = useAppSelector((state) => state.globalStyles);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {loading && <BUILoading />}
      <RouterProvider router={routes} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
