import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { redirect } from "react-router-dom";
import Layout from "./Pages/Layout";
import Business from "./Pages/Business";
import History from "./Pages/History";
import All from "./Components/All";
import Filter from "./Components/Filter";
import AllHistory from "./Components/AllHistory";
import FilterHistory from "./Components/FilterHistory";
import Historylayout from "./Pages/Historylayout";
import Homelayout from "./Pages/Homelayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Error Page</h1>}>
      <Route path="/" element={<Homelayout />}>
        <Route path="/" element={<All />} />
        <Route path="filter" element={<Filter />} />
      </Route>
      <Route path="business" element={<Business />} />
      <Route path="history" element={<Historylayout />}>
        <Route path="all" element={<AllHistory />} />
        <Route path="filter_history" element={<FilterHistory />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <div className="container m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;