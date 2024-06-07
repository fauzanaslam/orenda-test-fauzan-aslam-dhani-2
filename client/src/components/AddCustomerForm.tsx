import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AddCustomerForm = (props: any) => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const { state } = useLocation();

  const submitText = () => {
    if (props.act == "add") {
      return "Create New";
    } else if (props.act == "update") {
      return "Update";
    }
  };

  React.useEffect(() => {
    if (state) {
      const { id } = state;
      axios.get(`http://localhost:7891/customers/${id}`).then((res) => {
        setData(res.data);
      });
    }
  }, [state]);

  const handleInputData = () => {
    if (data.name && data.phone && data.email && data.address) {
      if (props.act == "add") {
        axios.post("http://localhost:7891/customers", data);
        navigate("/");
      }

      if (props.act == "update") {
        axios.put(`http://localhost:7891/customers/${data.id}`, data);
        navigate("/");
      }
    } else {
      alert("Fill all the required fields");
    }
  };

  return (
    <>
      <Box
        p={4}
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Grid container>
          <Typography variant="h6">Customer Information</Typography>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ p: 3 }}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      label="Customer Name"
                      variant="outlined"
                      fullWidth
                      value={data.name}
                      required
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="phone"
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      value={data.phone}
                      required
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="email"
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      value={data.email}
                      required
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={data.address}
                  required
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Stack>
            <Divider />
            <Stack spacing={2} direction="row-reverse" sx={{ p: 2 }}>
              <Button variant="contained" onClick={() => handleInputData()}>
                {submitText()}
              </Button>
              <Button variant="outlined" onClick={() => navigate("/")}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default AddCustomerForm;
