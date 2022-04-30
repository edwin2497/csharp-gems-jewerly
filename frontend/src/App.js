import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import WorkOrder from "./pages/WorkOrders";
import Invoice from "./pages/Invoices";
import Products from "./pages/Products";
//import NavBarPrivate from "./components/NavMenu/NavBarPrivate";
//import NavBarPublic from "./components/NavMenu/NavBarPublic";
import NavBar from "./components/NavMenu/index";
const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/employee" element={<Employee />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/workorder" element={<WorkOrder />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
