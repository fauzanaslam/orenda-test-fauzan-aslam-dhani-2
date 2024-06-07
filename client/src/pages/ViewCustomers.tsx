import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";

function ViewCustomer() {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h6">Customer Page</Typography>
      <Typography variant="caption">Main Menu</Typography>

      <Card sx={{ mt: 3, width: "100%", height: "80vh" }}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: 2 }}
          >
            <Typography variant="h6">All customers</Typography>
            <Button
              startIcon={<Add />}
              variant="contained"
              onClick={() => navigate("add-customer")}
            >
              Add new Customer
            </Button>
          </Stack>
          <Table />
        </CardContent>
      </Card>
    </>
  );
}

export default ViewCustomer;
