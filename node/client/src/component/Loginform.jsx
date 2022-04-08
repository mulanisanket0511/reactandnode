import {
  Avatar,
  Box,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import * as React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import axios from "axios";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Copyright(props) {
  return (
    <Typography color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [confpass, setConfpass] = React.useState("");
  const [data, setData] = React.useState([]);

  const myfunction = (data) => {
    axios
      .post("http://localhost:5000/api/add", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  let emaildata = [];
  // console.log(emaildata);
  React.useEffect(() => {
    axios.get("http://localhost:5000").then((res) => setData(res.data));
  });
  data.map((item) => emaildata.push(item.email));
  const Handleclick = (e, name, email, pass, confpass) => {
    e.preventDefault();

    var password = /^[A-Za-z0-9]\w{6,14}$/;
    if (name === "" || email === "" || pass === "" || confpass === "") {
      alert("fields can not Empty...!!");
    } else if (emaildata.includes(email)) {
      alert("email is same not valid");
    } else if (!password.test(pass)) {
      alert("password must be 7 character");
    } else if (pass != confpass) {
      alert("Password did not match: Please try again...");
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email)) {
      alert("email is not valid...!!");
    } else {
      alert("data successfully send");
      let data = { name: name, email: email, pass: pass, confpass: confpass };
      myfunction(data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="card container-xxl  "
            style={{ height: 550, marginTop:25 }}
          >
            <Avatar sx={{ m: 1, bgColor: "red" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1,color:"white" }}>
              <TextField
                style={{ color: "white" }}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="name1"
                label="Name"
                name="Name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={(e) => setPass(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                endIcon={<VisibilityIcon />}
                autoComplete="current-password"
              />
              <TextField
                onChange={(e) => setConfpass(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label=" confirm Pass"
                type="password"
                id="password"
                autoComplete="current-password"
                endIcon={<VisibilityIcon />}
              />

              <Button
                onClick={(e) => Handleclick(e, name, email, pass, confpass)}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 7, mb: 0 }}
              >
                Sign In
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
