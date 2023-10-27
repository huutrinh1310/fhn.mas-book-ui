import routes from "@/routes/routes";
import { RouterProvider, useNavigate } from "react-router-dom";
import { useAppSelector } from "./redux/store";
import BUILoading from "./components/shared/loading";

function App() {
  const { loading } = useAppSelector((state) => state.globalStyles);
  return (
    <>
      {loading && <BUILoading />}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
