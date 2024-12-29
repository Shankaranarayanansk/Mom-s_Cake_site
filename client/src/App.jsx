import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./Pages/auth/login";
import AuthRegister from "./Pages/auth/Register";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./Pages/AdminPanel/Dashboard";
import AdminOrder from "./Pages/AdminPanel/orders";
import AdminProduct from "./Pages/AdminPanel/products";
import AdminFeature from "./Pages/AdminPanel/feature";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="orders" element={<AdminOrder/>}/>
            <Route path="products" element={<AdminProduct/>}/>
            <Route path="features" element={<AdminFeature/>}/>
          </Route>
      </Routes>
    </div>
  );
};

export default App;
