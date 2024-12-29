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

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="features" element={<AdminFeature />} />
        </Route>
        <Route path="/customer" element={<CustomerView />}>
          <Route path="account" element={<Customeraccountpage />} />
          <Route path="checkout" element={<CustomercheckoutPage />} />
          <Route path="home" element={<CustomerHome />} />
          <Route path="listing" element={<CustomerListing />} />
        </Route>
        <Route path="*" element={<Index />} />
      </Routes>
    </div>
  );
};

export default App;
