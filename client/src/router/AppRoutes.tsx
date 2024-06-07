import { Route, Routes } from "react-router-dom";
import ViewCustomer from "../pages/ViewCustomers";
import AddCustomerForm from "../pages/AddCustomer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ViewCustomer />} />
      <Route path="/add-customer" element={<AddCustomerForm act="add" />} />

      <Route
        path="/edit-customer/"
        element={<AddCustomerForm act="update" />}
      />
    </Routes>
  );
}

export default AppRoutes;
