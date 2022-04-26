import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import WorkOrder from "./pages/WorkOrders";
import Invoice from "./pages/Invoices";
import Logout from "./pages/Logout";
import NavBarPrivate from "./components/NavMenu/NavBarPrivate";
import NavBarPublic from "./components/NavMenu/NavBarPublic";
import UserContextProvider from "./store/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBarPrivate /> */}
      <UserContextProvider>
        <NavBarPublic />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/workorder" element={<WorkOrder />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
