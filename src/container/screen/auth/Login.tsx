import { Stack, Typography ,Paper, TextField, Button} from "@mui/material";
import { useState } from "react";
// import {Paper from "@mui/material";
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

   const styles = {
    flex: 1,
    paperContainer: {
    //   backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // width: "100vw",
      // height: "100vh",
    },
  };
  const handleEmail = (event:any) =>{
   
    
setEmail(event.target?.value)
  }
  const handlePassword = (event:any) =>{
    setPassword(event.target?.value)
      }
  const handleLogin = () =>{
const loginBody = {
    email:email,
    password:password
}

  }
  return (
    <>

    <Paper style={styles.paperContainer}>
    <Stack sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'100vh'

    }}>
        <Typography variant="h3">Login</Typography>

        <Stack rowGap={2}>
            <TextField size="small"  label="Email" variant="outlined" onChange={(event)=>handleEmail(event)} />
            <TextField size="small" label="Password" variant="outlined"  onChange={(event)=>handlePassword(event)}/>
            <Button color="primary" variant ="contained" onClick={handleLogin}>Login</Button>
        </Stack>
      </Stack>
    </Paper>

    </>
  );
};
export default Login;
