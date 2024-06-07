import { Card, Typography } from "@mui/material";
import AddCustomerForm from "../components/AddCustomerForm";
import { Link } from "react-router-dom";

interface customerProp {
  act: "add" | "update";
}

const CustomerForm = (props: customerProp) => {
  let isAdd = false;
  let isEdit = false;
  let secString = "";
  if (props.act == "add") {
    isAdd = true;
    secString = "Create New Customer";
  }
  if (props.act == "update") {
    isEdit = true;
    secString = "Edit Customer";
  }

  return (
    <>
      <Typography variant="h6">Customers Page</Typography>
      <Typography variant="caption">
        <Link
          to="/"
          style={{ textDecorationLine: "none", color: "red", fontWeight: 500 }}
        >
          Main Menu
        </Link>{" "}
        {"> " + secString}
      </Typography>

      <Card sx={{ mt: 3, width: "100%", height: "80vh" }}>
        <AddCustomerForm act={props.act} />
      </Card>
    </>
  );
};

export default CustomerForm;
