import {
  Avatar,
  Box,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} 
from "@material-ui/core";
import { Button } from "@material-ui/core";
import * as React from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
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

    function InputAdornments(props) {

      var id = props.match.params.id
       const [data, setdata] = React.useState([])
       React.useEffect (( ) => {
       axios.get("http://localhost:5000")
       .then((res) => {
       setdata(res.data);
      })
      .catch((err) => console.log(err));
    })
    const user = data[id]
     function Update() {
   const name = document.getElementById("name1").value
   var email = document.getElementById("email").value
   var pass = document.getElementById("password").value
   var confpass = document.getElementById("confpassword").value
 var emaildata=[];
 data.map((item) => emaildata.push(item.email));

    var password = /^[A-Za-z0-9]\w{7,14}$/;
    if (name === "" || email === "" || pass === "" || confpass === "") {
      alert("fields can not Empty...!!");
    // } else if (emaildata.includes(email)) {
    //   alert("email is same not valid");
    } else if (!password.test(pass)) {
      alert("password must be 8 character");
    } else if (pass != confpass) {
      alert ("\nPassword did not match: Please try again...")
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email)) {
      alert("email is not valid...!!");
    } 
     else {
      alert("data successfully send");
      let data = { name: name, email: email, pass: pass, confpass: confpass };
    
      axios.put(`http://localhost:5000/update/user/${id}`,data)
        .then((res) => {
        console.log(data);
       })
       .catch((err) => console.log(err));
    
  }
}


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
          <Avatar style={{marginRight:260}} sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5" style={{marginRight:240}}>
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {
              user === undefined?
              null:
           <>
            <TextField
              
              margin="normal"
              required
              fullWidth
              defaultValue={user.name}
              
              id="name1"
              label="Name"
              name="Name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              defaultValue={user.email}
             
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              defaultValue={user.pass}
              
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
            
              margin="normal"
              required
              fullWidth
              defaultValue={user.confpass}
              
              name="password"
              label=" confirm Pass"
              type="password"
              id="confpassword"
              autoComplete="current-password"
            />

            <Button
              onClick={(e) => Update(e)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 7, mb: 0 }}
            >
              Sign up
            </Button>
            </>
    }
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
)}
export default withRouter(InputAdornments)
