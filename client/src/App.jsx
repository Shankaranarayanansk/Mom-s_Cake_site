import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./Pages/auth/login";
import AuthRegister from "./Pages/auth/Register";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./Pages/AdminPanel/Dashboard";
import AdminOrder from "./Pages/AdminPanel/orders";
import AdminProduct from "./Pages/AdminPanel/products";
import AdminFeature from "./Pages/AdminPanel/feature";
import CustomerView from "./components/customer/layout";
import Index from "./Pages/Not-found/index";
import Customeraccountpage from "./Pages/CustomerPanel/accountpage";
import CustomercheckoutPage from "./Pages/CustomerPanel/checkoutPage";
import CustomerHome from "./Pages/CustomerPanel/hero";
import CustomerListing from "./Pages/CustomerPanel/listingPage";
import CheckAuth from "./components/Common/cheackAuth";

const App = () => {
  const isAuthenticated = false;
  const user = null;
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth>
              <AdminLayout isAuthenticated={isAuthenticated} user={user}/>
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="features" element={<AdminFeature />} />
        </Route>
        <Route path="/customer" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <CustomerView />
          </CheckAuth>
        }>
          <Route path="home" element={<CustomerHome />} />
          <Route path="listing" element={<CustomerListing />} />
          <Route path="checkout" element={<CustomercheckoutPage />} />
          <Route path="account" element={<Customeraccountpage />} />
        </Route>
        <Route path="*" element={<Index />} />
      </Routes>
    </div>
  );
};

export default App;
