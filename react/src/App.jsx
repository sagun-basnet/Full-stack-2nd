import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import FetchAPI from "./components/FetchAPI";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  // const DashboardLayout = () => {
  //   return (
  //     <>
  //       <Topbar />
  //       <div className="flex">
  //         <SideBar />
  //         <Outlet />
  //       </div>
  //     </>
  //   );
  // };

  const pageRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
      ],
    },
    // {
    //   path: "/dashboard",
    //   element: <DashboardLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <DashboardHome />,
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <Usermanagement />,
    //     },
    //     {
    //       path: "/dashboard/sales-management",
    //       element: <SalesManagment />,
    //     },
    //   ],
    // },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/fetch-api",
      element: <FetchAPI />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={pageRoute} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};

export default App;
